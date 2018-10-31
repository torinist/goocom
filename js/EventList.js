$(document).ready(function() {
  console.log('動きました');

  // ボタンにイベントを追加
  $("#addBtn").on("click", function() {
    showPopupOverlay();
  });
  $("#cancelBtn").on("click", function() {
    hidePopupOverlay();
  });

  // イベントリストをGoogleAppから取得し、表示する
  deployEventList();

});

/**
 * イベントリストをDOMに配置する
 */
function deployEventList() {
  // contentsAreaの中を全て削除
  $(".contentsArea").empty();
  // ajaxでリスト取得
  let eventList = getEventList();

  // 取得したリストをeventListにセットする
  for (var i = 0;i < eventList.length; i++) {
      let eventDate = eventList[i].date;
      let eventName = eventList[i].eventName;
      let startDiv = '<div class="eventDate">';
      let endDiv = '</div>';
      $(".contentsArea").append(startDiv + '<a href="./event.html?date=' + eventDate + '&name=' + encodeURIComponent(eventName) + '">' + eventDate + '&nbsp;' + eventName + '</a>' + endDiv);
  }
}

/**
 * イベントリストをGoogleAppから取得する
 */
function getEventList() {
  let eventListJson = [
    {
        "date" : "20180101",
        "eventName" : "xxxxx xxx",
    },
    {
        "date" : "20190203",
        "eventName" : "xxxxx xxx",
    },
    {
        "date" : "20171020",
        "eventName" : "xxxxx xxx",
    },
  ];

  // jsonからオブジェクトに変換する
  let eventListObj = eventListJson;
  return eventListObj;
}

/**
 * ポップアップを表示し、ウィンドウの背景を灰色にする
 */
function showPopupOverlay() {
  // let $popup = $(".popupOverlay");
  // let $window = $(window);
  // let $body = $("body");

  // // ポップアップの場所を指定する
  // let posX = ($window.width() - $popup.outerWidth()) / 2;
  // let posY = ($window.height() - $popup.outerHeight()) / 2;

  // $popup
  //   .addClass("show")
  //   .css({left: posX, top: posY});
  
  // $body
  //   .addClass("shade");
  $('#addModal').modal('show');
}

/**
 * ポップアップを非表示し、ウィンドウの背景を白にする
 */
function hidePopupOverlay() {
  let $popup = $(".popupOverlay");
  let $body = $("body");

  $popup.removeClass("show");
  $body.removeClass("shade");
}