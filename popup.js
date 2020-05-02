document.addEventListener(
  "DOMContentLoaded",
  function () {
    chrome.browserAction.onClicked.addListener(function (tab) {
      var url = tab.url;
      chrome.windows.create({
        url: url,
        incognito: true,
        state: "maximized",
      });
    });
  },
  false
);
