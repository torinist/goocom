/**
 * メッセージをエラーレベルで出力
 * @param {String} message 
 */
function showMessageAreaWithError(message) {
  showMessageArea(message, "error");
  // mainエリア下をDOMから削除する
  emptyMain();
}

/**
 * messageAreaを表示する
 * levelが指定されていなかった場合は、infoで出力
 * @param {String} message 
 * @param {String} level 
 */
function showMessageArea(message, level) {
  let $message = $("#messageArea");
  $message.append('<div class="' + level +  ' alert alert-danger" role="alert">' + message + '</div>');
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

/**
 * mainを空にする
 */
function emptyMain() {
  let $main = $("#main");
  $main.empty();
}