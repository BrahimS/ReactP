// Test The webserver
import WebServer from "./myApp_server";

describe("starting", () => {
  let theServer = null;
  beforeAll(() => {
    theServer = new WebServer();
  });
  test("should start and make a callback", async () => {
    let promise = theServer.start();
    await expect(promise).resolves.toBeUndefined();
  });

  test("should stop and make a callback", async () => {
    let promise = theServer.stop();
    await expect(promise).resolves.toBeUndefined();
  });

});
