var path = require("path");

/**
 * GET /search/commits?q=adalgar
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
  res.setHeader("date", "Thu, 17 Nov 2022 22:09:21 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "no-cache");
  res.setHeader("vary", "Accept, Accept-Encoding, Accept, X-Requested-With");
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
  res.setHeader("x-ratelimit-limit", "10");
  res.setHeader("x-ratelimit-remaining", "8");
  res.setHeader("x-ratelimit-reset", "1668723013");
  res.setHeader("x-ratelimit-resource", "search");
  res.setHeader("x-ratelimit-used", "2");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("content-length", "82");
  res.setHeader("x-github-request-id", "7202:CE8B:2C23175:2CBEB50:6376B111");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA6vmUlBQKskvScyJT84vzStRslIw0AGJZeYl5+cW5KSWpMYXpRaX5pQUA6XSEnOKUyHSJam5IJFoLqDiWK5aLgBN0gZESQAAAA==", "base64"));
  res.end();

  return __filename;
};
