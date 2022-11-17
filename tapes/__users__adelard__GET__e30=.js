var path = require("path");

/**
 * GET /users/adelard
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
  res.setHeader("date", "Thu, 17 Nov 2022 22:09:40 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "public, max-age=60, s-maxage=60");
  res.setHeader("vary", "Accept, Accept-Encoding, Accept, X-Requested-With");
  res.setHeader("etag", "W/\"bf31d59222469814fc72654160a73796e37fd1607d4cc5eadbbc7373402da3c6\"");
  res.setHeader("last-modified", "Mon, 26 Mar 2018 04:48:38 GMT");
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
  res.setHeader("x-ratelimit-remaining", "55");
  res.setHeader("x-ratelimit-reset", "1668726554");
  res.setHeader("x-ratelimit-resource", "core");
  res.setHeader("x-ratelimit-used", "5");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("content-length", "467");
  res.setHeader("x-github-request-id", "7226:1259F:2DB4269:2E4D830:6376B123");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA52TQW+jMBCF7/kVEedNDQ10CVK1l7221UpJVfUSGXDBK2Mj2xAlqP99xx42GzisRE+Ip3mf34w9w2q9DoSquAyydUBLJqgugw==", "base64"));
  res.write(new Buffer("b07lJUhpvEu23xMvSFWyo1eDp5+/Hl7fnkXxuwpf9ofL8+XwiC7aU0v1sdPC1dXWtiYjBFVzV3Fbd3lnmC6UtEzau0I1pCPjMT/6xxgxlR5BeB6Kc2jLRyBSgGrIpIXaNmIeBSN4x6T2QwmhToCYG+h/jiFXFybEXy6rL0DANRBlawbTg1Y+x0FwY5dFqpxjIO4DtzViDFyKZuWiWKMHQp0k5BmIZq36y+tyU2jeWq7ksnjm1ok9Kl1RyS90OQycBhku27Ig3oFm1sNTXOZGy0BazXtanMexaFYw3sOcv0CceTGZPbfMLdIBXgQqhlt2pGXjN/aDCsNwOWnjCmUnhP+H991Seb6Vcthzx0KOUIUf+G0Fayh3e3ul1FwzmosJOefqtsSeuLXjm5WzEG2XC14ccdLZOvLJRtE/UwCFXvy3R1MFluJaU0AWC7Ol1nVxH0bxJkw30W4f7bIoyZLkHTvr2nJal27C7eb+YR/GWZxm2/Q9WH2u/gC5gj/q+gQAAA==", "base64"));
  res.end();

  return __filename;
};
