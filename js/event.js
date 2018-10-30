(function($) {

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
        // イベント情報をDOMに配置
        let eventObj = getEvent(eventDate);
        for (var i = 0; i < eventObj.length; i++) {

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
            },
            {
                "holeInfo": "東1",
                "holeChar": "ね",
                "circleNumber": "01",
                "circleChar": "a",
            },
            {
                "holeInfo": "東2",
                "holeChar": "N",
                "circleNumber": "01",
                "circleChar": "b",
            },
            {
                "holeInfo": "東1",
                "holeChar": "か",
                "circleNumber": "30",
                "circleChar": "a",
            },
        ];

        // jsonをオブジェクトに変換
        let eventObj = eventJson;
        return eventObj;
    }

    /**
     * メッセージをErrorとしてmessageAreaに表示する
     * @param {表示したいメッセージ} message 
     */
    function showMessageAreaWithError(message) {
        showMessageArea(message, "error");
    }
    
    /**
     * 指定されたメッセージレベルでメッセージを出力する
     * メッセージレベルが指定されていなかった場合は、infoで出力
     * @param {表示するメッセージ} message 
     * @param {メッセージレベル} level 
     */
    function showMessageArea(message, level) {
        if (level==="error") {
            // メッセージ出力
            $("#messageArea").append("<p class='error'>" + message + "</p>");
            // コンテンツを非表示にする
        }
        
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
})(jQuery);