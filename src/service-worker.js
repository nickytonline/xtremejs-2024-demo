chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message) {
    case "ping":
      sendResponse("pong");
      break;
    case "pong":
      sendResponse("ping");
      break;
    default:
      sendResponse("unknown message");
  }

  return true;
});
