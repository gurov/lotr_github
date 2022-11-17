var path = require("path");

/**
 * GET /users/adalgar
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
  res.setHeader("cache-control", "public, max-age=60, s-maxage=60");
  res.setHeader("vary", "Accept, Accept-Encoding, Accept, X-Requested-With");
  res.setHeader("etag", "W/\"07c85ce555cf40c22d222e0bfaccc7cccf5528d403127bb30859341b02e19ba0\"");
  res.setHeader("last-modified", "Sat, 06 Apr 2019 16:00:30 GMT");
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
  res.setHeader("x-ratelimit-remaining", "58");
  res.setHeader("x-ratelimit-reset", "1668726553");
  res.setHeader("x-ratelimit-resource", "core");
  res.setHeader("x-ratelimit-used", "2");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("content-length", "452");
  res.setHeader("x-github-request-id", "7226:1259F:2DB070E:2E49C11:6376B111");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA52TQYvbMBCF7/kVwefuyukmWWIopdDrLgTaUnoJsqy1VWRJSGOHxOx/70jjTRMfWrwn48e8T29GmmGxXGba1spkxTL7UnFdcw==", "base64"));
  res.write(new Buffer("n32IqqpQWu8e1pvHx11SjK3kIcnZ09f99sfPZy1+7zdP5/3q+Sw2ZOM9B+4PndexrgFwoWCM1HBfK2i6sgvSC2tAGrgXtmUdezvnc/9pTZzajyQ6kMQp1amRSBjEBnbTRAOtnmahDMlxU/titbZHREwN/B/HsIuLEtKvMvU7IOgamIVG4viwlddxECrAvEh1dAwsfvC6RkzAW/GymhVr9GCoo8E8A/PS2TdeVwbhlQNlzbx44dpJPVpfc6POfD4MnYEYMdu8IMlBZtnjW5znJsvAnFc9F6dxLF4KqXqc8zuIEy8lg5OTcZO+44sgJSiQB161aWdfuA6StpO3sdB0Wqd/fN+Om9O1VOKmRxZxtBVp4NcVsuUqLu6F0igvealvyKWy1yVwVADjmzWTEK4rtRIHmnSxzFOyUUzPFEEk/t2jWwWX4lIjMAvgbDnELj7mq91dvr7Lt99W2yLPi4f8F3XWuep/dYvXxR8XsWDx/AQAAA==", "base64"));
  res.end();

  return __filename;
};
