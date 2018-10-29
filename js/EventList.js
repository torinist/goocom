(function($) {
  $(document).ready(function() {
    console.log('動きました');

    // ボタンにイベントを追加
    $("#addBtn").on("click", function() {
      showPopupOverlay();
    });
    $("#cancelBtn").on("click", function() {
      hidePopupOverlay();
    });

  });

  /**
   * ポップアップを表示し、ウィンドウの背景を灰色にする
   */
  function showPopupOverlay() {
    let $popup = $(".popupOverlay");
    let $window = $(window);
    let $body = $("body");

    // ポップアップの場所を指定する
    let posX = ($window.width() - $popup.outerWidth()) / 2;
    let posY = ($window.height() - $popup.outerHeight()) / 2;

    $popup
      .addClass("show")
      .css({left: posX, top: posY});
    
    $body
      .addClass("shade");
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

  /**
   * messageAreaを表示する
   */
  function showMessageArea() {
    let $message = $("#messageArea");

    $message.addClass("show");
  }

  /**
   * messageAreaを非表示にする
   */
  function hideMessageArea() {
    let $message = $("#messageArea");

    $message.removeClass("show");
  }

})(jQuery);