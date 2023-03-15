const ngrok = require("ngrok");

const handle = async (signal) => {
  console.info(`Received ${signal}`);
  await ngrok.disconnect();
  console.info("Disconnected.");
};

(async () => {
  const url = await ngrok.connect({
    proto: "http",
    addr: 5173,
    authtoken: process.env.NGROK_AUTHTOKEN,
  });
  console.info(url);
})();

process.on("SIGINT", handle);
process.on("SIGTERM", handle);
