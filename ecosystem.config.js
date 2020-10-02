module.exports = {
  apps : [{
    name: "app",
    script: "./src/server/index.js",
    env_development: {
      PORT: 3000,
    },
    env_production: {
      PORT: 3306,
      NODE_ENV: "production",
    },
  }]
}
