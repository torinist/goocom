$(document).ready(function() {
    // リクエストパラメータからdateを取得する
    let eventDate = getParam("date");
    let eventName = getParam("name");
    // リクエストパラメータがない場合、メッセージ表示して終わり
    if (!eventDate || !eventName) {
        console.log("request param nothing");
        showMessageAreaWithError("リクエスト誤り");
        return;
    }

    deployEvent(eventDate, eventName);

});

/**
 * イベント情報をDOMに配置する
 */
function deployEvent(eventDate, eventName) {
    let tmpEventName = "";
    try {
        tmpEventName = decodeURIComponent(eventName);
    } catch(e) {
        tmpEventName = "イベント名無し"
    }
    // タイトルを削除
    $("#header > h1").empty();
    // タイトルに日付とイベント名を記述
    $("#header > h1").append(eventDate + '&nbsp;' + tmpEventName);
    // contentsAreaの中を全て削除
    $(".contentsArea").empty();
    // イベント情報をDOMに配置
    let eventObj = getEvent(eventDate);
    for (var i = 0; i < eventObj.length; i++) {
        let holeInfo = eventObj[i].holeInfo;
        let holeChar = eventObj[i].holeChar;
        let circleNumber = eventObj[i].circleNumber;
        let circleChar = eventObj[i].circleChar;
        let circleName = eventObj[i].circleName;
        let bookName = eventObj[i].bookName;
        let bookPrice = eventObj[i].bookPrice;

        $(".contentsArea").append('<div class="circleRow form-check">' +
            '<input type="checkbox" class="circleCheckbox form-check-input" id="circleRow-' + i + '" value=""/>' +
            '<label class="form-check-label" for="circleRow-' + i + '">' +
            '<span class="holeInfo">' + holeInfo + '</span>' +
            '<span class="holeChar">' + holeChar + '</span>' +
            '<span class="circleNumber">' + circleNumber + '</span>' +
            '<span class="circleChar">' + circleChar + '</span>' +
            '<span class="circleName">' + circleName + '</span>' +
            '<span class="bookName">' + bookName + '</span>' +
            '<span class="bookPrice">' + bookPrice + '円</span>' +
            '</label>' +
            '</div>'
        );
    }
}

/**
 * イベント情報をGoogleAppから取得する
 * return イベント情報オブジェクト
 */
function getEvent(eventDate) {
    let eventJson = [
        {
            "holeInfo": "西1",
            "holeChar": "あ",
            "circleNumber": "50",
            "circleChar": "ab",
            "circleName": "xxxx",
            "bookName": "xxxx",
            "bookPrice": 500,
        },
        {
            "holeInfo": "東1",
            "holeChar": "ね",
            "circleNumber": "01",
            "circleChar": "a",
            "circleName": "xxxx",
            "bookName": "xxxx",
            "bookPrice": 500,
        },
        {
            "holeInfo": "東2",
            "holeChar": "N",
            "circleNumber": "01",
            "circleChar": "b",
            "circleName": "xxxx",
            "bookName": "xxxx",
            "bookPrice": 500,
        },
        {
            "holeInfo": "東1",
            "holeChar": "か",
            "circleNumber": "30",
            "circleChar": "a",
            "circleName": "xxxx",
            "bookName": "xxxx",
            "bookPrice": 500,
        },
    ];

    // jsonをオブジェクトに変換
    let eventObj = eventJson;
    return eventObj;
}

/**
 * URLから引数のパラメータキーを取得する
 * @param {取得したいパラメータキー} name 
 * @param {*} url 
 */
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
