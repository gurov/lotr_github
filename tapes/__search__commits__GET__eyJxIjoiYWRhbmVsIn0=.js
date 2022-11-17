var path = require("path");

/**
 * GET /search/commits?q=adanel
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
  res.setHeader("x-ratelimit-remaining", "9");
  res.setHeader("x-ratelimit-reset", "1668723013");
  res.setHeader("x-ratelimit-resource", "search");
  res.setHeader("x-ratelimit-used", "1");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("x-github-request-id", "7202:CE8B:2C21843:2CBD1C9:6376B109");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+2dW2/jOJbH3/tTGNmHwaIn0V2WAjSmq9updDXWTifr6oyzPQgoiXLkyHbGkpOKjXqYzzZfbI8ulklLlHWhamYXfkkVbPN/KIo6POT5idx+1+udhcsQ+Y/2cr0Izy572p+jz7yFvZy/+DjEjyscrP0wgK9c5Ac4+TrE8+iT/4Hf9nrb+C+UWq98+PDsKQxfgktBQC/exdQLn9bWBagJK/yyDISx56LF+wcHLbDvvwvXaw89KgJ8P/fCQLAdXdSR4jqOZWgS7qtYt1xJdQ==", "base64"));
  res.write(new Buffer("LfjIRsgxsNg3RNc5i6oR2wyeUGSzfsHF0sGPnhMVHg4m+q1shta9L44G9vtodrUZjafqzXz0PJp9kCfj0fzh+s67GXz+8jC2xYfxg/cwuxIf5p82D/O72eT+4/PN9ee30Wb69jC//WFfu6dw7j8eNAvRJGWN0aAtolbEizA4tNjhjYjvXGRzf83JvYR23fWLVj0DWqt57wDLaB0+LVdUbeBTB4U4uvOyKMvnonIuS2NZvlSVS9m8EEXxXNQvRTG7pLijLdA8LpLcs96uB/fuls7Km67xpnfnvaJ9O8SF8Bx58TNhmoauipr6PX3Lf1wHeBVcLJbwcPjvxNNylvbvXu/rrquDXNK0IeZ5Pdde+Mvaoq81q3ZasR/3fba4YnMcBGgat88Hx+m5no+D3quHeusXf4mcPxZ/LD4tQjxdIfgbXPYu//OP1R+LDz7+4gW9n30cdSHc++c/FlPsJ984y96nOVos/d4va7wKUe8j8sFzRF9WvwNn4QpHldr3xNZ9MVIMBM1WVdU0TUVXLcW2NFU2JFHS+pJom1hSTEsykK1aLt2sqa+qXJjZB6C1Moctpr/K+klRlz/zl1Nvse++u95L1O8s9oW7fkp0OsJRfn58ng5ufnJ/G5lTsih6RSFa5dxO/GmQ9uqop9tLuM2LMB4O1sLO1l9ef1BJNegliV7incmvykeY+GE6GGHI0rW8MVnQXfr+8g3Ec5dID3FFFRCywnlFbzFtrgiFt8IyfMLQ8HDhX6km9IKjw0BhZadRwa0Q/QODI6UZwM1cYadJhdOiUN23BdR0G8cCtPjaCuyV9xJ6y0WjVg5IAbIplqspWngb1FgZBEivfhbHMU1aIS5IVg2/VhitC29TUnIrvKxgzLHfqaZcYRt7r3CjmssfSJB1Dt9fYjf/Gboc+XngQayInHnsZeJIMeeXikevvWt6w9a5C88ZKRu7ACkaPFW1X+yUhoNb/fe/jnx7dqXdDCYQwd0qpEQz57Szydk5FV3jEbdUVKSeQ9op8HBFB1p8nFAmysn9ZHpdOJ69OD+Xk2k2dzaZRBs3k4nwdjBE7SjvxMm1vKBVPAmJpqSp3/lbNkWMG8QLl6t3KhRMAh61L+uSohlGsXO5iyOeX35e/yx9IOu6mw0k81fyG3ft+4/0ZOFgtkv+Onbg8Vwkm12nE9t4qKQqDLHr8TAOfsQI5KI5zH7Oywjl4EfN/CUjmAM9djh3NBgvGvuI1oPyR3wnPduii9bzoQdT9aKgDqqTfNxVWBc1Jv/ADlS7DO0i+a6CO9DmHd6BJLcAD7Sax2AlHjiuY4dBHugzwrzoZrICPXqpotaDmS4Dko7Rwdl8AJzgApwq4aDd5eq5wGWWzw5L1h8p/w3ax8L7EimIsaA8KfiM39voRcW3Avw9nI/ZMClF1nKFYGRrY4DS2cJi216WmleEGM3b2InLkw3ztFy2aum4PCnoBcEaV5v2lN3BWCYQdg/gYj23DqbXlZ7qMhOJAFl3FATedAFrS0dmlmWqmcZWyK0IWLD0Zj+1kt9JbIXkf3TvQNM2VQ+hONkclr+02uhFy8axxlaAVbeDtZHwMTLXoqEj9UiiWHyF3bbikURePF57bFvtSCMvDRFACH2mjfpOQtgetriPFtM1LA+3Uc80yF4SxS1TtDm+MFf21OxFSOloqXLlWevWznUvQ9U8CYnAsbRplDSwilQKxOPFtBbdhQzb6KaJk3UtlNN0X74bwoMFC9tt5YmcUd4EpyRZNN3cCgVjQzIIpVZatFE6Cu2qW2grXU9vdyviJflA2H7/gsInylOC7Whi3eIiUgVha6EAf724uNg+YUQ=", "base64"));
  res.write(new Buffer("LyvP8aqdZ0gEqLF0ZT/BCmiLem9RKgHR3ByF8Yq1S7WNA/PzKLXVpu0zDbLyyX1vUfdEoLC/vEAY3abCcflC5XmU8QuXi1Y+fi9SaGOxDD3Xsyut5Jc5fEpn+5cAYAf8ZwQTDOjsoWd78BzADJ662xBo41YtlwjAZUEW+WC13sfwbLS5KyucSGyFg4yNA0nl5XtbJIBQ2SV/97nGwIbUdbREf5HkIdNvaiEhyfKYMFzCWJsmau5gTSxL+ytYBh7EUZCpm0jsm6ao9m3DgIyALto2djXkGq5h7Bf9d1BI/YIMKGQ4+yzfDD59GQ6mbzezkT+c3z1P5rebyfhZvrm/AvDjWYM0hDLZTFVIP4ij2U+zifz7fHT/cX5zPVFvBsMfsmf82JpVeXMI9S+q1ohXbj2obJ4jGMKqEomG1G4VWMk4ioZIwIGcS+pYVi5V41ISIzTke1FmoiEfgATBi8dBxDYRLj1aBtpxICj+yUWMP/04jT6NkuHFUEUSCJXTHnWryJv2GEajdy8aF3or/HeYNoe9/1B67mo5TwkZwcGvEf5xh189TKX2mrIZZd0hoTOQI8rAZrhIUw0gx2xbkZEiWS6WTNc0NKOPUL9v6oi+RymdUblwF3RGcm1UOBAlQGVVlnXdUItzFPsE6CdxOPskj2ZTkl1quKC/s8k5AZq/wiMrhfkC9Rbu0+5StGBfc7meUuKT+EwlOaU9U7Uukp47aX4pz1SxecIzFYgjPfKJqbQ4l2SWUomSpfZGC+1ZzbpIdRaPCieK4ogb2SWgyZ5Sz5FkKWwOruRAi48zyUQ5uZNMrwuHshfn51IyzeZOheAUmruVTIS3YyFq14VrISmKhELYw/0xzlwlwZY6P+ZsTldc1dUB6ofIDGZykiKbQGFbBpKxbWADW0jSRNuw6eDsyNNdblRoZjMNCCsXLgoIa5PH5VcSCBZ2bYwMx1GxKRo2VjRdcjVsqqpl6ioWNUeBKBfLPJuvmc20+SoX3jdfPYJH1nRDlkRDZEXHV283/q++fW1u0F/vXu3F8/toPFGHM/h88GE/L4f+vcN2DjsvNWiQfA/jbpG/b0r4JNL0bYzJnvxkIKo5+TbLjocsnA5EE99GuDZjQgB6rQmfomut9MTTzVNvPE/vXdFoDtdUj+ShtEpG86ixKhM8qSh7NAe1OuROqnd0NI9kaxM7O3HGaA6a9UmdVPNgNAepOOY/skRORfiHkwTQ4DpNiOtUn8hJL5CNW4Nu1yROWocyl0ezOGe/wVsAnh324NWDHlmsF63a9pZuz/ZCD1NzshbAToX6xcjNke6QJAQYYi2gHZYiR2yHZYI/uMOy1ALdYUm2h3dYylzxHZaRtgAPS5cbwsMywAfiYak3x3hYirxAnjJ9DihPmXxbmKdMO17wzkMOtXAelj4voIelzwPpYWlzgnpY8iQdRAb7BJDTajziBfaw6s8D7WFpJwuUBZ2yLtzDMsAP72FZKIVu6gM+LDPcER+WoR0n1BbyYevHoBAnzIdlpR3ow1Lljfqw7LSFfVi6XHAfljg34IdlgDvywzLULfTDssoH+2GpcwN/WAa+Ffpzh70FTOLseB+I/8JotYA1lN9Wyxm297t/uIoGK8SKpiHZ6Rt9RbcNUdZEy7ElFzZfsGS5r9vI2S8c7zCg+gWZGNBQBdRnMxoMlZv5ZDO6/30GaI80ur96fxjY8N1QBgToDXChtwnsCzO8nwAy9NGDpLwymo+eHq7rY0AVmkaof4FNkKAKNQkqV4U/HlRaPRIVqt1asAhzFBWCLWOUc7E/FsVLybyU+wkqJP07oUL/4ioSW8Qk0FAyE+39aY4=", "base64"));
  res.write(new Buffer("AmCc/hQtHO12joLbtds1KnVNZXeXDMBbQkVlZmBTDHjrI97+xUB9BBCiZkoOtmyAiixXFg1TlFylL5m2AtSRYpuqTi9PpwmRyoWL8knxFkAttn9JmpNsMUZOoUZGgW8+oSSbcCT/SK74kldYN5OQrv0ffzWDWmIuyiN0lEXgmUPoJIPAP3/ALXvQPnfAN3PQTd6AlTVgv727R7qPAUYnF5Jsb5gbpEifwy0VeXIhlXeESkMFjjtBpYrNcaJU4DD9+P/dhfAEiUpDsnStUXD1vgLb7rnYxbYGL4cgR5ZUWcKWYvaxDXSRCYGZZR0EZJUCA6FCBRraTwPCypUvCgibAkYVrioQVEnSoRUNR4RgFmJdLBowe1KRJkmyY2ku0u0+suyDnTL5NWsz+2mzVi7cGDxSjL6pqApzX7I8eDTcTJWb8VAcbuxC8KjsrlDDSwGEVLXsCUgq26WYMYmANYBK3foEJNXYJXI3YCdF2LtDnoCkbDmk6nsL//eBpKruLAcnxavGPVhOjgElSqa3W1vuwXbnqwDTEXvjPYVqrlHVxpXKmqI9ulSqzh9jKjXXGdJUarU93lQqzw11KrXSBfZUapATAlVqgzcOVWqMKxpVaqk1JlWqzhmZOmqLHz511BQnlOqoHY5YVaktzohVqS2OuFWpHb7oVakpzhhWqS3OSFYVW/EGTmSMki531EHLSu3wRrVKjXHHtkqtdYNwlZrsCucqNcoZ7TpiqwPMq9QiF+Sr1EJH+FepTU4oWKkNnlhYqSHeiFipsa5wsVKj3wQdK60BV4ys1BJvpKzU2LfCyw7fbcp2llJFW7JhFykJm4ByoL4q2ZqrKjq8XWuZsDG8Iep9GUv548bqF2QiZeTOUrdvk83H2WgweRvef9Zuxh+fJ3Dc2PB+KD3Mbjcj2HVqdP1JG20+wW5UH+TR5ld/eF/juLF0nYLRHEL9i2qCkTGsQ7Kh4s3gj47lqkTiYlWrRcZpVXAx9VxWI1wMjhqT/x13lgJc7F9ZxXa42OEdJW9OS0TsUJrAwjRbkkwN3s93TEdVMMKWCi5FFE1ZMzULaFVbsyTTOjhsLU1XVS5clAU8YWHscycZGZ3a+ZwTFpY/05NKRxx9sfyEhcX7sgdCOhDz3h4mo0262BzmhIUlzXsiS6k+zN6d4kSWFhyCTLXdCQvrYH8p0+irlqNKjuPqEsJAMCHFMDDgX7ptWZqtIdNQJdwIBcvFfolTFJrZTAO/yoWLAr+m+BfjSqKTbWVXdUwIVfuGZrqOjuHthmi3KcdwsQgbTGHRxbp2sHdqJTaGtcNzQ5tZ3Fyxwo0xr9P+Uqf9peLt77hB3ZlW1ZPi0sgu25SKdfAvCJ/2l6oLjJ/2l4Jd5Q4P9I2YOy4nvTEWHckwOodwnfaXggPSy3es4g9mFYQExAFzXA6GY/QFoT2Alas8N+gqp9wFaJUzwgmuyunyBqpyBrhCVDn11uBUTpEzLFWozw+QKpTnBEUVanMEoXL6nOGnnD5H4CmnzRdyyslzBpty+pxhJpY+D4App80bWsoZ4A4q5Sx0AyflzHQFJOUMcYaQCvQ7AI9yVrjARjnVjgCjnB1OUFFOlydIlBPnDQ/lDHQFDOUMfRNIKGeVKxiUU+cNA+UMfCsAaIBCdP7fNpy8Ze+PlTNxX3aitcO+o5iqa5oIDoiCRU7d0U3ZkF14hxiJjrhfKN7tJ1W/IAv+Gd9qw/EVHA833dzMfB+AnufhfCI+DJzn4eZZfJg9a5P7B384fpo/jB+eR7Pn95vBr/PJ/e37ZPzT83AwqX2sXEFTCPUvqAn4U2A5qGyaP/RDVYcEfmq3RoU=", "base64"));
  res.write(new Buffer("/aEk41w0z6X+WFIvJThAzjh+lNy3O0SuduWuvfCX9QHFkp1wt4ADIV/89x/322MUn26XA3zoQ+Qk6hC5FZwaO8fnsC4UBtFpcp9fnGiv8burD4Ph1cV8D+jBvWjJ9+T6RbLlkywbrm44lqvZVh+ySoaiqpBeUiAvArkR0XR0RZf0fjHbU7lwUYrnxPac2B6uy/qnxPwpMR/ls6pv+bQ7d4pctI/3jZNMQ4dzeJk7YOxOornSbgYTEY7G3R/SG42ajc6h2dnkfDBl0TUeSWsXFamXI8wO9OKwe9yBVskpNDVyhJkoJ84n0+sCFtyLM06habCLXKbZfBOoTKIN75OJ8IYGidp1gQ3y3AqqcAahA9Sjw9a/QPwgydTdvoFNJKkwdUMIPrdk01Wx29fonVmOPNlpoqrAoNDM3u4suaqVLQoEm7I+BVcRCHq/r1uws5NtO4rmqBH2I+rwEowOIS3W+nCiel/TIarl1myN7O2arWrhpoyPpJoQ0sMZ8pXPkPsyGjx/GY6n9NnuMKjtzpAjW50cN92CrZtYvz1t1XTaqinr0ie2Z4OiF+KPnfRFIbYntucbsD0s93XA9diwb/UK+d4GU+s17c+GY9mvvdESNVLGpUnPHSE3dbZeoNT48zoHw3pHrA5lpT2nQ8lxY3Qo1S74HMoAJzaH0uTN5VDiXJkcukOgKfWIWP7Sav6McGZxqJpG2vw4nJw0JwYnp8uRv6G0ObM3lDZH7uawzqsp2sALdKRXJlGZxt6ZM29DVztZjLAO6k1uU9243hzPcaPqzJuxyfVrpgEumUUINOD8ucV6Do3+lVq0DII1fkxtNG71rriag1uwCKPr4HRm2+Ht5X9eG2WBC0tDKXbE0VA2ODE0lCZPfoYS5s3O0PfP83EQLhfR4aIFzxFFuzR+jr4JM0NdFldehlLmzcrQ/RIy6sv36NyfYJdM3ydvAhsy7lEu5kKM1wq+wt+/fff1u/8FXbsRnd2zAAA=", "base64"));
  res.end();

  return __filename;
};
