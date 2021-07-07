const { BlobServiceClient } = require('@azure/storage-blob');
const { v1: uuidv1} = require('uuid');
var fs = require('fs');

async function main() {
  console.log('Azure Blob storage v12 - JavaScript quickstart sample');
  // Quick start code goes here
  //const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
  const AZURE_STORAGE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=eule1337storage;AccountKey=jlcs8L7fUB7msVwSPz/gb86IbUgAQiwbw7U6EE1YEv0F7kHLnJlRChgexw+cIbNTohw4y3rO7Pj06SHCdunkJw==;EndpointSuffix=core.windows.net"

  const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
  const containerName = "images"

  const containerClient = blobServiceClient.getContainerClient(containerName);
  console.log('\nListing Blobs...');

  for await (const blob of containerClient.listBlobsFlat()) {
    const blockBlobClient = containerClient.getBlockBlobClient(blob.name);
    const image = await blockBlobClient.downloadToFile("./assets/"+blob.name)
    console.log('\t', blob.name)
  }
  // Get blob content from position 0 to the end
  // In Node.js, get downloaded data by accessing downloadBlockBlobResponse.readableStreamBody
  // In browsers, get downloaded data by accessing downloadBlockBlobResponse.blobBody
  const downloadBlockBlobResponse = await blockBlobClient.download(0);
  //const makeAFile = await streamToImage(downloadBlockBlobResponse)
  //var base64Image = new Buffer(await streamToString(downloadBlockBlobResponse.readableStreamBody), 'binary').toString();
  
  //var decodedImage = new Buffer(base64Image, 'base64').toString("binary");

  //fs.writeFile('testfile.png', downloadBlockBlobResponse.downloadToFile), function (err) {
    //if (err) throw err;
    //console.log('Saved!');
  //}



  console.log('\nDownloaded blob content...');
}

main().then(() => console.log('Done')).catch((ex) => console.log(ex.message));

// A helper function used to read a Node.js readable stream into a string
async function streamToString(readableStream) {
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

async function streamToImage(readableStream) {
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