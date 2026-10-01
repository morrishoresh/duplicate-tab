browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.duplicate(tab.id);
});
