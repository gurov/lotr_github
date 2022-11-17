const PROXY_CONFIG = {
    context: [
      "/users",
      "/search"
    ],
    // "target": "https://api.github.com/",  
    "target": "http://localhost:3111",
    "changeOrigin": true,
    "secure": true
}

module.exports = PROXY_CONFIG;
