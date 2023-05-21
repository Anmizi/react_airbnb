import { createProxyMiddleware } from "http-proxy-middleware";
module.exports = function (req, res) {
  let target = "";
  if (req.target.startsWith("/api")) {
    target = "http://codercba.com:1888/airbnb/api";
  }
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  })(req, res);
};
