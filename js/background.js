var roopUrl = "https://game.granbluefantasy.jp/#mypage";
var parsedItems = []; // ここにデータを保持

// ショートカットで最終クエストの召喚石選択画面までページ遷移するショートカットイベント
chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.update(tab.id, {url: roopUrl});
    });
});

// URLをチェック
chrome.tabs.onUpdated.addListener(checkForValidUrl);

function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.match(/htt(p|ps):\/\/game.granbluefantasy.jp\/.*/)) {
    // ... show the page action.
    chrome.pageAction.show(tabId);

    if (tab.url.match(/htt(p|ps):\/\/game.granbluefantasy.jp\/#quest\/supporter\/.*/)) {
      roopUrl = tab.url;
    } else if (tab.url.match(/htt(p|ps):\/\/game.granbluefantasy.jp\/#event\/teamraid\d\d\d\/supporter\/.*/)) {
      roopUrl = tab.url;
    }
  }
};
