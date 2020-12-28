chrome.webRequest.onHeadersReceived.addListener(function (details) {
  console.log("Header details:")
  console.log(details)
})