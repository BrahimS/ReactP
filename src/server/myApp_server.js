// Configure the server
const express = require('express');

// Define the webserver class
export default class WebServer {
  constructor () {
    this.app = express();
    this.app.use(express.static('dist/public'));
  }
  // Define the start method
  start() {
    // Return a promise
    const port = 8000;
    return new Promise((resolve, reject) =>  {
      try {
        this.server = this.app.listen(port, () => {
          resolve();
        });
      } catch (error) { // if error then catch it here
        console.log(error)
        reject(error);
      }
    });
  }

  // Define the stop method
  stop() {
    // Return a Promise
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve();
        })
      } catch (error) {
        console.log(error);
        reject(error)
      }
    });
  }
}
