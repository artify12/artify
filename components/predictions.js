import copy from "copy-to-clipboard";
import { Copy as CopyIcon, PlusCircle as PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import Loader from "components/loader";
import { toast } from "react-toastify";
import axios from "axios";
import { NFTStorage } from "nft.storage";


export default function Predictions({ predictions, submissionCount, isProcessing, shouldShowMint }) {
  console.log(JSON.stringify(predictions))
  const scrollRef = useRef(null);

  useEffect(() => {
    if (submissionCount > 0) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [predictions, submissionCount]);

  if (submissionCount === 0) return;

  return (
    <section className="!w-full !my-10">
      <h2 className="!text-center !text-3xl !font-bold !m-6">Results</h2>

      {submissionCount > Object.keys(predictions).length && (
        <div className="!pb-10 !mx-auto !w-full !text-center">
          <div className="!pt-10" ref={scrollRef} />
          <Loader />
        </div>
      )}

      {Object.values(predictions)
        .slice()
        .reverse()
        .map((prediction, index) => (
          <Fragment key={prediction.id}>
            {index === 0 &&
              submissionCount == Object.keys(predictions).length && (
                <div ref={scrollRef} />
              )}
            <Prediction prediction={prediction} isProcessing={isProcessing} shouldShowMint={shouldShowMint}/>
          </Fragment>
        ))}
    </section>
  );
}

export function Prediction({ prediction, showLinkToNewScribble = false, isProcessing, shouldShowMint }) {


  console.log(shouldShowMint)

  // MINT PART
  //mint part ==============================
  const [prompt, setPrompt] = useState("scooby doo");
  const [imageBlob, setImageBlob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [minted, setMinted] = useState(false);
  const cleanupIPFS = (url) => {
    console.log("URL IS BRE: " + url)
    if (url.includes("ipfs://")) {
      return url.replace("ipfs://", "https://ipfs.io/ipfs/");
    }
    // console.log(url.data.value.cid)
    // let newUrl = "https://ipfs.io/ipfs/" + url.data.value.cid;
    // return newUrl;
  };
  const urlToObject = async () => {
    // console.log("PREDIKTERONI: " + prediction.output[1])
    // const imageroni = await fetch(prediction.output[1])
    //   .then((res) => {
    //     console.log("REZONI: " + JSON.stringify(res))
    //     res.blob()})
    //   .then(async (myBlob) => {
    //     console.log("MY BLOG " + JSON.stringify(myBlob))
    //     return uploadArtToIpfs(myBlob)
    //   });
    const blob = new Blob([prediction.output[1]], {type: 'image/png'})
    console.log("BLOBERI: " + JSON.stringify(prediction.testing))
    return uploadArtToIpfs(blob)
    console.log("IMAGERONI: " + imageroni)
    return imageroni;
  }
  const uploadArtToIpfs = async (myBlob) => {
    try {

      const nftstorage = new NFTStorage({
        token: process.env.NEXT_PUBLIC_NFT_STORAGE_API
      })


      console.log(JSON.stringify(myBlob))

      // const file = new File([myBlob], "image.png", {
      //   type: "image/png",
      // });

      let file = await fetch(prediction.output[1]).then(r => r.blob()).then(blobFile => new File([blobFile], "image.png", { type: "image/png" }))

      const store = await nftstorage.store({
        name: "AI NFT",
        description: "AI generated NFT",
        image: file,
      });
      return cleanupIPFS(store.data.image.href);

      const imgUrl = await axios.post('https://api.nft.storage/upload', {
        name: 'AI NFT',
        description: 'AI Generated NFT',
        url: prediction.output[1]
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      ).then((response) => {
        const ipfsHash = response.data.value.cid;
        const ipfsLink = `https://ipfs.io/ipfs/${ipfsHash}`;
        return ipfsLink
      })

      return imgUrl;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const mintNft = async () => {
    setModalOpen(false);
    setMinted(true);
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 4000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Minting your Artify NFT",
      success: "NFT minted, check your opensea private section 👌",
      error: "Error rejected 🤯",
    });
    try {
      const imageURL = await urlToObject();
      console.log("URL ", imageURL);
      // mint as an NFT on nftport
      const response = await axios.post(
        `https://api.nftport.xyz/v0/mints/easy/urls`,
        {
          file_url: imageURL,
          chain: "polygon",
          name: name?.length > 0 ? name : "Artify Art",
          description:
            desc?.length > 0
              ? desc
              : "Artify AI generated NFT minted",
          mint_to_address:
            address?.length > 0
              ? address
              : "0x659664dd23937edee4f19391A5C355FdbD4c93e6",
        },
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_NFT_PORT_API,
          },
        }
      );
      const data = await response.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  // END MINT PART

  const [linkCopied, setLinkCopied] = useState(false);

  const copyLink = () => {
    const url = window.location.origin + "/artifacts/" + prediction.id;
    copy(url);
    setLinkCopied(true);
  };

  // Clear the "Copied!" message after 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLinkCopied(false);
    }, 4 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!prediction) return null;

  return (
    <div className="!mt-6 !mb-12">
      <div className="!shadow-lg border !my-5 !p-5 !bg-white flex">
        <div className="!w-1/2 !aspect-square !relative !border">
          <img
            src={prediction.input.image}
            alt="input art"
            className="!w-full !aspect-square"
          />
        </div>
        <div className="!w-1/2 !aspect-square !relative">
          {prediction.output?.length ? (
            <img
              src={prediction.output[prediction.output.length - 1]}
              alt="output image"
              className="!w-full !aspect-square"
            />
          ) : (
            <div className="!grid !h-full !place-items-center">
              <Loader />
            </div>
          )}
        </div>
      </div>
      <div className="!text-center !px-4 !opacity-60 !text-xl">
        &ldquo;{prediction.input.prompt}&rdquo;
      </div>
      <div className="!text-center !py-2">
        <button className="lil-button" onClick={copyLink}>
          <CopyIcon className="icon" />
          {linkCopied ? "Copied!" : "Copy link"}
        </button>
        {(shouldShowMint && !isProcessing )&& <button
          className="bg-black text-white rounded-md p-2"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Mint
        </button>}
        {minted && (
          <div className="bg-slate-800 text-white underline p-3 border-2 border-yellow-200 cursor-pointer">
            <a
              href="https://opensea.io/account/private"
              target={"_blank"}
              rel="noreferrer"
            >
              Click here to see your nft{" "}
            </a>
          </div>
        )}
        {modalOpen && (
          <div className="w-full bg-white px-16 py-14 rounded-md text-center">
            <h1 className="text-xl mb-4 font-bold text-purple-500">
              Do you Want to add custom details?
            </h1>
            <input
              className="border-2 border-sky-200 rounded-md p-2 w-full md:w-72"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter the NFT name"
              value={name}
            />
            <input
              className="border-2 border-sky-200 rounded-md p-2 w-full md:w-72"
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              placeholder="Enter a description for the NFT"
              value={desc}
            />
            <input
              className="border-2 border-sky-200 rounded-md p-2 w-full md:w-72"
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Enter your WALLET ADDRESS"
              value={address}
              required
            />
            <button
              className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
              onClick={mintNft}
            >
              Ok
            </button>
          </div>
        )}
        {showLinkToNewScribble && (
          <Link href="/draw">
            <button className="lil-button" onClick={copyLink}>
              <PlusCircleIcon className="icon" />
              Create new art
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
