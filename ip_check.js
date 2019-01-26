/**
  * Determine the IP address of an IBM Cloud Functions action
  * 
  */

const { promisify } = require('util');
const request = promisify(require('request'));

async function main(params) {

  let response;
  const url = 'https://api.ipify.org?format=json'
  try {
    response = await request(url);
  } catch (err) {
    return Promise.reject({
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: { message: 'Error processing your request' },
    });
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: response.body,
  };
}
exports.main = main;
