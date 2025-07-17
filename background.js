chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: "https://utverse.tennessee.edu/",
    type: "popup",
    width: 1200,
    height: 800
  });
});
