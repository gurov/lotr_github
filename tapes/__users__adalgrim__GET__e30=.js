var path = require("path");

/**
 * GET /users/adalgrim
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
  res.setHeader("etag", "W/\"b5289b65019e0a5e366fa079f1dadaf1aba5bf3d034c104cd664a6630e9fa603\"");
  res.setHeader("last-modified", "Mon, 24 Oct 2022 12:08:37 GMT");
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
  res.setHeader("x-ratelimit-remaining", "57");
  res.setHeader("x-ratelimit-reset", "1668726553");
  res.setHeader("x-ratelimit-resource", "core");
  res.setHeader("x-ratelimit-used", "3");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("content-length", "612");
  res.setHeader("x-github-request-id", "7226:1259F:2DB0B34:2E4A042:6376B112");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA51Uy27bMBC8+ysIn1ogth52EkNAURRwLwUSpIj7QC4GRdHS1hTJkpRd18i/d0kqTuxDAfskaLQznB3uaj8gZChUDXJYkCGtqA==", "base64"));
  res.write(new Buffer("qA20wysPQ4VYlmez7Pr2OiBSVXwZ4OHd/OvN95/3gv36vLtb1H/uFyyLNLqhjpplZ4Sva5zTtkiSiNpxDa7pys5yw5R0XLoxU23SJS/nfNx8mEad2vRK8cAInqpq6BWjDMra5LiLxrXi1Ew0ESjHxSslhNqiyCmD/u+g5ECLJuMryPoSFaTtE+UajhFiO899GGDdmaZqT9kn/oF31utYvBrDq/OM9SS0tZXoaJ8YrtWLYFdaZkA7UPJMg/YtNbapTE0l/KUXqCHVRhHv7kwrgRLZfINDeSY9cvaJNrChbNdHYzjjsMGwL5E8IUdvbqe5X6pvOBgRseD4klZt2N8VFZbHRaVtKPxU0ZY8rtXWKBkJOPOayh1+lJ0QobjE/ffFsUAoFuL3yCMIboFKMschMsDcFXlQgsqqj6ql4Jf8oNSA4bQU/uhXdVBe6gcXYrTBzeIVQQHSQN2IHfndUQErQPALbjuZY1RCaW7IFv8TpOJcE8poxVtgpKRsXRvVIfvdQzN/H3S0UXhhBONSpiJqRWzHGLeWgCQr7HCEw8vWqBSEW7xbX7TlJaFaC4i92nGfL57q+sWTMcJDH7orsXwZJ6UgsxBdD4ZVwy7TAL7+DQqSv0Fwsw81DINyOBrU+XDyNLsepdPRJF2kN8UkLab5U3TU6eqoLs9HWTrKp4ssL9JZMbl9Gg6eB/8AdU3oCMYFAAA=", "base64"));
  res.end();

  return __filename;
};
