import Messages from "components/messages";
import PromptForm from "components/prompt-form";
import Head from "next/head";
import { useEffect, useState } from "react";

import { getRandomSeed } from "lib/paint-seeds";
import pkg from "../package.json";
const HOST = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

import Footer from "components/footer";

import prepareImageFileForUpload from "lib/prepare-image-file-for-upload";
import PaintPromptForm from "components/paint-prompt-form";
import Header from "layouts/Header";
import EditFooter from "components/edit-footer";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const appName = "Artify Edit";
export const appSubtitle = "Give AI instructions on how to edit your images.";
export const appMetaDescription = "Give AI instructions on how to edit your images.";

export default function Edit() {
    const [events, setEvents] = useState([]);
    const [predictions, setPredictions] = useState([]);
    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [seed] = useState(getRandomSeed());
    const [initialPrompt, setInitialPrompt] = useState(seed.prompt);

    // set the initial image from a random seed
    useEffect(() => {
        setEvents([{ image: seed.image }]);
    }, [seed.image]);

    const handleImageDropped = async (image) => {
        try {
            image = await prepareImageFileForUpload(image);
        } catch (error) {
            setError(error.message);
            return;
        }
        setEvents(events.concat([{ image }]));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const prompt = e.target.prompt.value;
        const lastImage = events.findLast((ev) => ev.image)?.image;

        setError(null);
        setIsProcessing(true);
        setInitialPrompt("");

        // make a copy so that the second call to setEvents here doesn't blow away the first. Why?
        const myEvents = [...events, { prompt }];
        setEvents(myEvents);

        const body = {
            prompt,
            image: lastImage,
        };

        const response = await fetch("/api/edit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        let prediction = await response.json();

        if (response.status !== 201) {
            setError(prediction.detail);
            return;
        }

        while (
            prediction.status !== "succeeded" &&
            prediction.status !== "failed"
        ) {
            await sleep(500);
            const response = await fetch("/api/edit/" + prediction.id);
            prediction = await response.json();
            if (response.status !== 200) {
                setError(prediction.detail);
                return;
            }

            // just for bookkeeping
            setPredictions(predictions.concat([prediction]));

            if (prediction.status === "succeeded") {
                setEvents(
                    myEvents.concat([
                        { image: prediction.output?.[prediction.output.length - 1] },
                    ])
                );
            }
        }

        setIsProcessing(false);
    };

    const startOver = async (e) => {
        e.preventDefault();
        setEvents(events.slice(0, 1));
        setError(null);
        setIsProcessing(false);
        setInitialPrompt(seed.prompt);
    };

    return (
        <div>
            <Head>
                <meta name="description" content={pkg.appMetaDescription} />
                <meta property="og:title" content={pkg.appName} />
                <meta property="og:description" content={pkg.appMetaDescription} />
                <meta
                    property="og:image"
                    content={`${HOST}/preview.png`}
                />
                <title>{pkg.appName}</title>
            </Head>
            <Header style1 style={{ paddingBottom: '120px !important;' }} />
            <main className="container max-w-[700px] mx-auto p-5 !my-32 " style={{ padding: "20px !important;", paddingTop: "120px !important" }}>
                <hgroup>
                    <h1 className="text-center text-5xl font-bold m-6">{appName}</h1>
                    <p className="text-center text-xl opacity-60 m-6">
                        {appSubtitle}
                    </p>
                </hgroup>

                <Messages
                    events={events}
                    isProcessing={isProcessing}
                    onUndo={(index) => {
                        setInitialPrompt(events[index - 1].prompt);
                        setEvents(
                            events.slice(0, index - 1).concat(events.slice(index + 1))
                        );
                    }}
                />

                <PaintPromptForm
                    initialPrompt={initialPrompt}
                    isFirstPrompt={events.length === 1}
                    onSubmit={handleSubmit}
                    disabled={isProcessing}
                />

                <div className="mx-auto w-full">
                    {error && <p className="bold text-red-500 pb-5">{error}</p>}
                </div>


                <EditFooter
                    events={events}
                    startOver={startOver}
                    handleImageDropped={handleImageDropped}
                />
            </main>
        </div>
    );
}