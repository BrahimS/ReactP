import WebServer from './myApp_server';

let theServer = new WebServer();
theServer
  .start()
  .then(() => {
    console.log( 'THE SERVER IN RUNNING...');
  })
  .catch((error) => {
    console.log(error);
    console.log('THE SERVER IS NOT RUNNING ');
  });
