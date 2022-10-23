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

  // $("#Save").on("click", function(){
  //   localStorage.setItem("text", $("#text").val());
  // });

  $("#Go").on("click", function(){
    // 現在のタブのURLをクリップボードにコピー
    // chrome.tabs.getSelected(null, function(tab){
    //   copyText("{1}".replace("{1}", tab.url));
    // });

    // テキストエリアのURLへ遷移
    // goUrl($("#text").val())

    // ローカルストレージへ保存したURLへ遷移
    goUrl(localStorage.getItem("text"));
  });

  // function showSaveData(){
  //   $("#text").val(localStorage.getItem("text"));
  // }
  // showSaveData();
});


// background.js のデータを参照
var parsedItems = chrome.extension.getBackgroundPage().parsedItems;
var roopUrl = chrome.extension.getBackgroundPage().roopUrl;

$(document).ready(function() {
   // テキストエリアへURLを表示
   // $("#text").val(roopUrl);
   // ローカルストレージへテキストエリアの文字列を保存
   // localStorage.setItem("text", $("#text").val());

   // ローカルストレージへクエストURLを保存
   localStorage.setItem("text", roopUrl);
});
