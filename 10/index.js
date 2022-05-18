function parseUrl(_url) {
  // Возможный вариант, но работает не для всех ссылок
  // var urlapi = require('url');
  // const url = urlapi.parse(_url);

  const url = new URL(_url)

  return {
    hash: url.hash,
    host: url.host,
    hostname: url.hostname,
    href: url.href,
    origin: url.origin,
    pathname: url.pathname,
    port: url.port,
    protocol: url.protocol
  };
}

module.exports = parseUrl;
