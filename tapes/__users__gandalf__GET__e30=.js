var path = require("path");

/**
 * GET /users/gandalf
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
  res.setHeader("date", "Thu, 17 Nov 2022 22:09:53 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "public, max-age=60, s-maxage=60");
  res.setHeader("vary", "Accept, Accept-Encoding, Accept, X-Requested-With");
  res.setHeader("etag", "W/\"ebb27bf1d9356ee05a8523735466943bfcc5fe886706a57d923c5961129a7b80\"");
  res.setHeader("last-modified", "Mon, 14 Nov 2022 12:30:54 GMT");
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
  res.setHeader("x-ratelimit-remaining", "52");
  res.setHeader("x-ratelimit-reset", "1668726554");
  res.setHeader("x-ratelimit-resource", "core");
  res.setHeader("x-ratelimit-used", "8");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("content-length", "494");
  res.setHeader("x-github-request-id", "7202:CE8B:2C29A0F:2CC555F:6376B131");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA51Uy27bMBC8+ysEnePo4UcLAUYQNJceHKBoUxS5GJRESxtQpEBSMlwh/94lV1FiHwooJ4OrmdnZl4dFEIRCVSDDLAgrJksmjuE=", "base64"));
  res.write(new Buffer("jYtCiaHVl/Umjv1bqpIffDDcP/zY/v7zKIqX/erx4em0v9/tiMR6Zpk+dFo4XG1ta7Iooqi5rcDWXd4ZrgslLZf2tlBN1EWU5a7frUml0qMOpaPgtWYLox6JoKiJLgqobSOunZADz7jAHpUQ6oQS1wT2nzTRxCKH9ARZfUIEWUOkbM2xeVjK69gIMHaepcoxhsj94LBGGYMz0bycZWvkoKmTRD9DpHmr3vS63BQaWgtKzrNnPjKpRqVxEvCXzRdDpiEN522eEc8gMu9xE+exiTJErYaeFeexLZoXHHrs8ycUr7jkzJ5b7u7oCTeCIgYsP7Cy8fd6ZMJwuk3WeOC9tLWSEPysFTaVKLjrLZNn/Cw7ITw8x4t3cAIIVfjmu8i3mkvJ4Cb4LktgY38aBu6cJ3oNmrNcuIzvkqA+Pu0JrB13WZK5Cdp2uYDiQBPIgq23NAb9+qIQ/eW831cWpB42ndiEKdCLxZ4z6/yncRIv46/LdP0rSbJ0k622z1RF15YXuDRdJskyQVyareJss34OF6+Lf0ORcu0QBQAA", "base64"));
  res.end();

  return __filename;
};
