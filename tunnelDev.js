const spawn = require("child_process").spawn;

const tunnel = spawn("node", ["startTunnel.js"], {
  detached: true,
});

const devServer = spawn("npm", ["run", "dev"], {
  detached: true,
});

tunnel.stdout.on("data", data => {
  console.log(`[TUNNEL_PROCESS]: ${data}`);
});

devServer.stdout.on("data", data => {
  console.log(`[DEV_SERVER_PROCESS]: ${data}`);
});

const handle = (signal) => {
  console.info(`[MAIN_PROCESS] Received ${signal}`);
  process.kill(-tunnel.pid);
  process.kill(-devServer.pid);
  console.info(`[MAIN_PROCESS] Exited.`);
};

process.on("SIGINT", handle);
process.on("SIGTERM", handle);
