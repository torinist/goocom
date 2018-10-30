(function($) {

  function showMessageAreaWithError(message) {
    showMessageArea(message, "error");
  }
  
  /**
   * messageAreaを表示する
   */
  function showMessageArea(message, level) {
    let $message = $("#messageArea");
    $message.append('<p class="' + level +  '">' + message + '</p>');
    $message.addClass("show");
  }

  /**
   * messageAreaを非表示にする
   */
  function hideMessageArea() {
    let $message = $("#messageArea");
    $message.empty();
    $message.removeClass("show");
  }

})(jQuery);