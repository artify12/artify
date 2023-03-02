import Head from "next/head";
import { useEffect, useState } from "react";
import pkg from "../package.json";
import Header from "layouts/Header";
import Loader from "components/loader";

const HOST = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export default function Prompter() {
    const token = "bfec21fbab6d63c7e12da669e65d0b443a1d70a3";
    const [imageFile, setImageFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);
    const prompt = "Hello"
    const handleSubmit = async (e) => {
        async function process(image) {
            const response = await fetch("/api/prompter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    image
                }),
            });
            let prediction = await response.json();
            console.log(prediction)
            if (response.status !== 201) {
                setError(prediction.detail);
                setLoading(false);
                return;
            }
            setPrediction(prediction);
            while (
                prediction.status !== "succeeded" &&
                prediction.status !== "failed"
            ) {
                await sleep(2000);
                const response = await fetch("/api/prompter/" + prediction.id);
                prediction = await response.json();
                if (response.status !== 200) {
                    setError(prediction.detail);
                    setLoading(false);
                    return;
                }
                setPrediction(prediction);
                console.log(prediction)
            }
            await sleep(2000);
            const response2 = await fetch("/api/prompter/" + prediction.id);
            prediction = await response2.json();
            if (response2.status !== 200) {
                setError(prediction.detail);
                setLoading(false);
                return;
            }
            prediction.output && setLoading(false);
            // setLoading(false); 
            console.log(prediction)
        }
        setLoading(true);
        e.preventDefault();
        if (imageFile) {

            const reader = new FileReader()
            reader.readAsDataURL(imageFile)
            reader.addEventListener("load", async () => {
                process(reader.result)
            })
        }
        else {
            process()
        }
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
            <main className="container max-w-[1024px] mx-auto p-5 !my-32 h-[90vh]" style={{ padding: "20px !important;", paddingTop: "60px !important" }}>
                <h1 className="text-3xl font-bold my-5">Prompter</h1>
                <p className="mb-5">
                    Prompter is a tool by Artify that generates text prompts that can be used to recreate similar looking versions of the image.
                    Prompter can also be used as a learning tool, where the user has the insight on how the good structured and descriptive 
                    prompts for generating AI images look like.
                </p>
                <form onSubmit={handleSubmit} className="flex gap-5 w-full flex-wrap justify-center pb-5">
                    <input type="file" id="imageUpload" onChange={(e) => setImageFile(e.target.files[0])} />
                    <button type="submit" className="bg-zinc-300 rounded-md px-5 hover:bg-zinc-500 hover:text-white transition-colors">Generate</button>
                </form>
                <div className="pb-16">
                    {loading && (
                        <div className="mb-5 w-full flex justify-center flex-col items-center">

                            <div className="flex items-center justify-center">
                                <Loader />
                            </div>
                            <p>Processing request...</p>
                            <p className="pt-2">This might take some time</p>
                        </div>
                    )}

                    {prediction && prediction.output && (
                        <div className="mb-5 w-full flex justify-center flex-col items-center">
                            <h2 className="text-xl font-bold mb-2">Result</h2>
                            <h3 className="text-center font-bold">{prediction.output}</h3>
                        </div>
                    )}
                    {error && (
                        <div className="mb-5 w-full flex justify-center flex-col items-center">
                            <h2 className="text-xl font-bold mb-2">Error</h2>
                            <p>{error}</p>
                        </div>
                    )}
                </div>


            </main>
        </div>
    );
}
