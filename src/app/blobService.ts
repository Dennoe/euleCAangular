import { Injectable } from "@angular/core";
import { BlobServiceClient } from "@azure/storage-blob"

@Injectable()
export class BlobService {

  constructor() {}
  
async getImage(name) {
  console.log('Azure Blob storage v12 - JavaScript quickstart sample');

  // Quick start code goes here
  //const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
  const AZURE_STORAGE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=eule1337storage;AccountKey=jlcs8L7fUB7msVwSPz/gb86IbUgAQiwbw7U6EE1YEv0F7kHLnJlRChgexw+cIbNTohw4y3rO7Pj06SHCdunkJw==;EndpointSuffix=core.windows.net"

  const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
  const containerName = "images"

  const containerClient = blobServiceClient.getContainerClient(containerName);
  console.log('\nListing Blobs...');

  const blockBlobClient = containerClient.getBlockBlobClient(name)
  const downloadResponse = await blockBlobClient.download()
  console.log (downloadResponse.readableStreamBody);
  return downloadResponse.readableStreamBody;

  for await (const blob of containerClient.listBlobsFlat()) {
    const blockBlobClient = containerClient.getBlockBlobClient(blob.name);
    const image = await blockBlobClient.downloadToFile("./assets/"+blob.name)
    console.log('\t', blob.name)
  }
  console.log('\nDownloaded blob content...');
}

// A helper function used to read a Node.js readable stream into a string
async streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data) => {
      chunks.push(data.toString());
    });
    readableStream.on("end", () => {
      resolve(chunks.join(""));
    });
    readableStream.on("error", reject);
  });
}

async streamToImage(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data) => {
      chunks.push(data);
    });
    readableStream.on("end", () => {
      resolve(chunks.join(""));
    });
    readableStream.on("error", reject);
  });
  }
}