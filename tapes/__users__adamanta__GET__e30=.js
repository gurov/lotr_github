var path = require("path");

/**
 * GET /users/adamanta
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
  res.setHeader("date", "Thu, 17 Nov 2022 22:09:23 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "public, max-age=60, s-maxage=60");
  res.setHeader("vary", "Accept, Accept-Encoding, Accept, X-Requested-With");
  res.setHeader("etag", "W/\"7af6c5c34f8ea5f3cd57fb48d85cd3fe0971b4469fc7fb76a2ce611ec97b4310\"");
  res.setHeader("last-modified", "Sat, 27 Feb 2016 12:00:04 GMT");
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
  res.setHeader("x-ratelimit-remaining", "56");
  res.setHeader("x-ratelimit-reset", "1668726553");
  res.setHeader("x-ratelimit-resource", "core");
  res.setHeader("x-ratelimit-used", "4");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("content-length", "469");
  res.setHeader("x-github-request-id", "721E:B88D:2B23ABF:2BBCAAC:6376B113");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA52TQYvbMBCF7/kVwedmJXuz6dawlMJeetiWQra0ewmyrLVVZMlIskNq9r93pHHT2IeCczJ+zPv0ZqQZVut1okwldZKvk08la5g=", "base64"));
  res.write(new Buffer("9ix5F2RZgnZ3n2b0fhcFbUpxiGry9Pht9/3HF8V/PW+f9p+PXx9/PqCL9cwze+isCnW1963LCUHV3VTS113ROWG50V5of8NNQzoyHvOxf9giprIjCM9DcQ5t5QhEClAdmfZQ+0bNs2CGaJkWvxqlzBEgcwf730HkbMOQ+Ct1dQ0FbAMxvhYwQWjnbRyGdH5hqCpYBhI+cGUjx8HNWFEuCzaaINZRQ6KBWNGav8CucNzK1kujFwZ0l1Zs09iKafmbXUEDq0NISLcwSrSgW/TwJhfa0TOQ1sqe8dM4Giu4kD0M+xrkzIzZ/KkVYaee4WGg4qQXB1Y2cXtfmXIC95Q1oVB3SsV/eOkt06dLqYCdDyzkKMPj0C8rRMNkWOEzpZZWsEJNyIU0lyX+KL0fn66ehWi7Qkl+wFnnaxqTjWJ8rABC8d8+TRXYjXMNhywehst86CKj6e0mpZtbuqcf8nSX39EX7Kxry2ndbkOzTfZ+n2Y5pTndviSrt9Uf4TFWxAYFAAA=", "base64"));
  res.end();

  return __filename;
};
