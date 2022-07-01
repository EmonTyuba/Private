console.log("Hello Ajax!")

document.getElementById("toTestPage").onclick = function() {
    //テストページへ遷移する。
    window.location.href = "test.html"
}

document.getElementById("ajax").onclick = function() {
    //処理を実行する。
    var obj = new XMLHttpRequest();
    obj.onreadystatechange = function(){
        if(obj.readyState == 4){
            console.log(obj.responseText);
        }
    }

    obj.onerror = function() {
        console.error("エラーが発生しました。");
    }

    //Apache上でCORSの設定が必要。
    obj.open("GET", "http://localhost:80");
    obj.send();
}