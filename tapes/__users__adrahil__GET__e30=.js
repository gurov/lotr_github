var path = require("path");

/**
 * GET /users/adrahil
 *
 * accept-language: ru-RU,ru;q=0.9
 * accept-encoding: gzip, deflate, br
 * referer: http://localhost:4200/
 * sec-fetch-dest: empty
 * sec-fetch-mode: cors
 * sec-fetch-site: same-origin
 * sec-ch-ua-platform: "Linux"
 * user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
 * sec-ch-ua-mobile: ?0
 * accept: application/vnd.github+json
 * sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
 * cache-control: no-cache
 * pragma: no-cache
 * connection: close
 * host: api.github.com
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "GitHub.com");
  res.setHeader("date", "Thu, 17 Nov 2022 22:09:41 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "public, max-age=60, s-maxage=60");
  res.setHeader("vary", "Accept, Accept-Encoding, Accept, X-Requested-With");
  res.setHeader("etag", "W/\"848d5e6589912200a03277ae358c82220ab6e4cd99a39a044a5450079b046808\"");
  res.setHeader("last-modified", "Wed, 02 Aug 2017 19:25:58 GMT");
  res.setHeader("x-github-media-type", "github.v3; format=json");
  res.setHeader("access-control-expose-headers", "ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("strict-transport-security", "max-age=31536000; includeSubdomains; preload");
  res.setHeader("x-frame-options", "deny");
  res.setHeader("x-content-type-options", "nosniff");
  res.setHeader("x-xss-protection", "0");
  res.setHeader("referrer-policy", "origin-when-cross-origin, strict-origin-when-cross-origin");
  res.setHeader("content-security-policy", "default-src 'none'");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-ratelimit-limit", "60");
  res.setHeader("x-ratelimit-remaining", "54");
  res.setHeader("x-ratelimit-reset", "1668726553");
  res.setHeader("x-ratelimit-resource", "core");
  res.setHeader("x-ratelimit-used", "6");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("content-length", "453");
  res.setHeader("x-github-request-id", "7226:1259F:2DB4816:2E4DE08:6376B125");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA52TQU/jMBCF7/0VVc6A0wKlGwmtVuJaJCR2BVwqxzGJK8e2bCfdbsR/Z+xJIc2BVThFeZr3+c3Y083m80TqUqgkmye/CksrIQ==", "base64"));
  res.write(new Buffer("k7OgigKky3S1Wi9vFlFRuuDbKCebu4fVn6d7yXab/f3u+WqzY3/RRlvqqd02Voa6ynvjMkJQdRel8FWTN45bppXnyl8wXZOGHM/52d5eIae0PQkPRHFMNaInIgawjpw0UflajrNghug4qX3VUuo9IMYG+sUx5MOFCfFXqPIbEHB1RPuKw/iglbd+EML5aZHK4OhI+MB19RgHt2J5MSlW74FQewV5OmK50UdekztmhfFCq2nx3NCJPWpbUiX+0ekwcDpkhGzTgkQHmnkLb3GaGy0dMVa0lB36sVjOuGhhzt8gjryYzB8MD5v0G14EKk54vqVFHXf2lUrHcTtpHQpVI2X8h/dtqDoMpRw2PbCQIzWLAx9W8JrC/g8olbCc5vKEnAs9LPF74X3/ZtUohGlyKdgWJ53N05isF+MzBRCKn3t0qsBSfNQwyOJhttSHLpbp4uY8XZ+ny8fFj2x5nV2vX7CzxhT/q5u9zd4BkAYgBPwEAAA=", "base64"));
  res.end();

  return __filename;
};
