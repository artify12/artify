const REPLICATE_API_HOST = "https://api.replicate.com";

import packageData from "../../../package.json";

export default async function handler(req, res) {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error("The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it.");
  }
  
  const body = JSON.stringify({
    version: "50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5",
    input: req.body,
  });

  const headers = {
    Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
    "Content-Type": "application/json",
    "User-Agent": `${packageData.name}/${packageData.version}`
  }

  const response = await fetch(`${REPLICATE_API_HOST}/v1/predictions`, {
    method: "POST",
    headers,
    body,
  });


  if (response.status !== 201) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.statusCode = 201;
  const url = prediction.urls.get
  console.log(url)
  const imageURL = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
    }
  })
  let ans = await imageURL.json()

  console.log("hello",ans)
  res.end(JSON.stringify(ans));
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
