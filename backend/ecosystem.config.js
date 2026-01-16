module.exports = {
  apps: [
    {
      name: "fake-api-backend",
      script: "dist/server.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 4000
      }
    }
  ]
};
