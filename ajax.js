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
            var element = document.getElementById("ajax");
            element.insertAdjacentHTML("afterend", obj.responseText);
        }
    }

    obj.onerror = function() {
        console.error("エラーが発生しました。");
    }

    //Apache上でCORSの設定が必要。
    obj.open("GET", "http://localhost:80");
    obj.send();
}

document.getElementById("search").onclick = function() {
    var obj = new XMLHttpRequest();
    var postNumber = document.getElementById("postNumber").value
    obj.onreadystatechange = function() {
        if(obj.readyState == 4){
            console.log("取得完了。");
            var element = document.getElementById("search");
            var jsonObj = JSON.parse(obj.responseText);
            var data = jsonObj.results
            
            document.getElementById("todouhu").value = data[0].address1;
            document.getElementById("sikuchou").value = data[0].address2;
            document.getElementById("address").value = data[0].address3;
        }

        obj.onerror = function() {
            console.error("エラーが発生しました。");
        }
    }
    obj.open("GET", "https://zip-cloud.appspot.com/api/search?zipcode=" + postNumber);
    obj.send();
}