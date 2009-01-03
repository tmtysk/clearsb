var ClearSB = {
  // 初期化処理 .. サーチアクションにリスナをバインドする
  init: function() {
    sb = document.getElementById("searchbar");
    sb.handleSearchCommandOriginal = sb.handleSearchCommand;
    sb.handleSearchCommand = function(e) {
      sb.handleSearchCommandOriginal(e);
      ClearSB.onSearch();
    };
  },

  // サーチアクション時に呼ばれる
  // 検索エンジンに文字列が渡るよう、1msec 後にフォームをクリアする
  onSearch: function() {
    setTimeout(function() { 
      sb = document.getElementById("searchbar");
      sb._textbox.textValue = "";
    }, 1);
  }
};

// 起動時に上記のオブジェクトをロードする
window.addEventListener("load", ClearSB.init, false);
