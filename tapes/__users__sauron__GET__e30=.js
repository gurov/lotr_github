var path = require("path");

/**
 * GET /users/sauron
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
  res.setHeader("date", "Thu, 17 Nov 2022 22:09:47 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "public, max-age=60, s-maxage=60");
  res.setHeader("vary", "Accept, Accept-Encoding, Accept, X-Requested-With");
  res.setHeader("etag", "W/\"0599fac340e978a8a728992f4ac1625204c6fd240f17ed14b1c11afaa012183c\"");
  res.setHeader("last-modified", "Tue, 08 Nov 2022 20:14:03 GMT");
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
  res.setHeader("x-ratelimit-remaining", "53");
  res.setHeader("x-ratelimit-reset", "1668726553");
  res.setHeader("x-ratelimit-resource", "core");
  res.setHeader("x-ratelimit-used", "7");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("content-length", "507");
  res.setHeader("x-github-request-id", "722E:BA52:2A6DEC6:2B053BD:6376B12B");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA5VUy27bMBC8+ysEnZNQUowiFWAUKdKj0xZNi6AXg6YYaQuKFPiw6wr5mH5Lf6xLruK4BnrQyeB6Znb2pXGRZbkyLei8znLHgzU=", "base64"));
  res.write(new Buffer("Or+IQWgwUpbL6+ImvbVp5CYF8/Xd5zffHu+V+PHh5/3dev/xdrUiEt9xz+0mWBVxnfeDqxmjqLtqwXdhG5y0wmgvtb8SpmeBUZZ3u9WSVFo76VA6Cp5rDjDpkQiKOnbqv/O9OjdCBhLhFPpklDJ7FDjH8/8nYUcS2aMn6Ha+BpJGZnwnsXFYxvPUBHB+lqE2EkYWf3BOk4rDcVjZzDE1UdDSXqObkVk5mBe5sHXCwuDB6Fnm3CmRCjS25Rp+8dlaSHQkEZ3NspEIxJU7XMBZZGKMbLCw4+IwtcRKIWGHLZ4veEYlX/4wyHg8X3EVKOLAyw1v+nSjT1w5SQfJ+wT8xLfKZO9xzvBSGy74wPUB/9VBqYRGTBvRJKmMSH2PkS9cZ2tog1RZI7OHIEL/57e+yG5tix0Czad+9RziVR8VO7ASU0cPr1nAnD79Hryf1lqT3SN0CFsFYkMTqbNqmWxO0bTLqFTRt+f11vCTVCTg8d4QVRJXoB+Pg+A+llUVxdvL4uayLB+qoi7Lurz+TpWEofkHV1UIQmjCLesCcYvnxV/86a5vGgUAAA==", "base64"));
  res.end();

  return __filename;
};
