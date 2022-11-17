var path = require("path");

/**
 * GET /users/adanel
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
 * connection: close
 * host: api.github.com
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "GitHub.com");
  res.setHeader("date", "Thu, 17 Nov 2022 22:09:13 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "public, max-age=60, s-maxage=60");
  res.setHeader("vary", "Accept, Accept-Encoding, Accept, X-Requested-With");
  res.setHeader("etag", "W/\"abe627db09c315e923fe26196163b51754ba4165bb24203db774298ed3cdf339\"");
  res.setHeader("last-modified", "Wed, 26 Oct 2022 11:29:06 GMT");
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
  res.setHeader("x-ratelimit-remaining", "59");
  res.setHeader("x-ratelimit-reset", "1668726553");
  res.setHeader("x-ratelimit-resource", "core");
  res.setHeader("x-ratelimit-used", "1");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("content-length", "495");
  res.setHeader("x-github-request-id", "721A:1259F:2DAEA44:2E47EF0:6376B109");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA5VTTWvcMBC9768wPmdjW7t1U0MogaWQQwKlaQm5GFlWbC2yZCTZy3bJf+9I4/3IQg8+GT+/9+bNeOawiKJY6kaouIjih5oqLg==", "base64"));
  res.write(new Buffer("4xsPihoQsiYkz+/WAVG65mWA46fNz/zP67Nk28f0aftInrdNijI6UkdNORjpea1zvS2SBFF72wjXDtVguWFaOa7cLdNdMiTHOt/H+zX6NGZywoIIXrv2YnJEG7C1yWUPrevkdRSMEASX1Hctpd6BwTWf/r9IchJhPHwVqpnvAaJDol3LYXTQxsc0BGHdrECNFxwS/4A/NblY+CGG13NCTRKItFOQ5pAY3uuj3VBZZkTvhFazwtlLITaoTUOV+Etne4HQooVPNitGEKCWj7CCs8SoOCS9ESNl+2kkhjMuRhjxfMMrKeZy+5778/kNq4CIFY6XtO7Cnb5TaTmeJO0C8aE2gqtycz5f2O+eqj18VIOUgVzBnXsyOkrNwtg98sNQxfg0k44Kf7snWSsMp5X0dc5WQnvdBm49+sWg9FHtdsK5aYkVhjuJ+qGSgpU4/yL6GkJNYFhcsMwCeL6rzwhcCXBWgcMglYORU+eTkDTLl1m2JHcv2ar4sioy8ob9DH39iUfIMkuXJH/JsoJ8K9L8LV58LP4BU82PzQgFAAA=", "base64"));
  res.end();

  return __filename;
};
