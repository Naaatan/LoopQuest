$(function(){
  function copyText(val){
      $("#text").val(val);
      $("#text").select();
      document.execCommand('copy');
  }

  function goUrl(url) {
    chrome.windows.getCurrent(function(w) {
        chrome.tabs.getSelected(w.id, function(t) {
          chrome.tabs.update(t.id, {url: url});
        });
    });
  }

  $("#Go").on("click", function () {
    // ローカルストレージへ保存したURLへ遷移
    goUrl(localStorage.getItem("text"));
  });
});


// background.js のデータを参照
var roopUrl = chrome.extension.getBackgroundPage().roopUrl;

$(document).ready(function () {
   // ローカルストレージへクエストURLを保存
   localStorage.setItem("text", roopUrl);
});
