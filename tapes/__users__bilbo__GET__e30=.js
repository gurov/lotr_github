var path = require("path");

/**
 * GET /users/bilbo
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
  res.setHeader("date", "Thu, 17 Nov 2022 22:09:57 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "public, max-age=60, s-maxage=60");
  res.setHeader("vary", "Accept, Accept-Encoding, Accept, X-Requested-With");
  res.setHeader("etag", "W/\"c4926d68076b15f88ac06b895be9cd8910307fbe68a0ea40beb78dfa6c4b10d0\"");
  res.setHeader("last-modified", "Sun, 16 Oct 2022 16:37:17 GMT");
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
  res.setHeader("x-ratelimit-remaining", "51");
  res.setHeader("x-ratelimit-reset", "1668726554");
  res.setHeader("x-ratelimit-resource", "core");
  res.setHeader("x-ratelimit-used", "9");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("content-length", "464");
  res.setHeader("x-github-request-id", "7226:1259F:2DB7A97:2E51129:6376B135");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA5VTwWrcMBC971csPncj25s41LAUSq4bKKSl5LLIsmKrlSUhyd5uTP69I42Teg09+GT0eO/Nm/HMuNluE6kboZJym3wVstLJpw==", "base64"));
  res.write(new Buffer("gIkagH12+3mfx7fSNT9FMDk+fCt+/HyU7Nfxz+PD79djczigiA7UU3vqrQy81nvjSkIQdTeN8G1f9Y5bppXnyt8w3ZGeYJUvw+EWXRo7+WA5BJeeRkx+aAKmjszit76TyxxYP/JnzBctpT6DfEmn/y1BPjSYDZ9CNastQDMS7VsOQ4MW3qYBCOfXxGkCfyThA79oMnHwJyyvV0SaFBDorCDLSCw3+t2trxyzwnih1Zpobq7D7rRtqBKvdK0V6Bw6hFxrQkQ+SvkAe7dGi4KRGCsGyi7TOCxnXAww3dV+CyWm8hfDw8V8hx1AxAnPT7Tu4l2+UOk4XiHtAlH1UsY37LKh6jKHKrjm4IU+UrM46DmDd1SEA/1waYXltJJXzpXQc4o/C++nLVWLEKavpGAnnHK5zWKyCYyrCUZpBP/dzTUCZwAcFDLI4mGy1Icu8jRLd2mxy4unNC33WXl394yd9aa+4uX5DqhZ8ZQV5f6+zO6fk83b5i+FjNlh4AQAAA==", "base64"));
  res.end();

  return __filename;
};
