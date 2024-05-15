const REGEX = /http:\/\/localhost:7002\/(.*)\.js.*/;
const TARGET_TPL = 'http://localhost:7002/$1.js.map?enableCatchAll=true';

console.log('background.ts loaded');

console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

export {}

chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    if (details.url.match(REGEX)) {
      console.log('matched');
      console.log(details);
      const targetUrl = details.url.replace(REGEX, TARGET_TPL);
      const headerSourcemap = { name: "sourcemap", value: targetUrl }
      const responseHeaders = details.responseHeaders.concat(headerSourcemap);
      return { responseHeaders };
    }
    return { responseHeaders: details.responseHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders", "extraHeaders"]
);