console.log("Hello World!")

var element1 = document.getElementById("lists");

document.getElementById("insertHTML").onclick = function() {
    //チェックされているもの調べる。
    let choises = document.getElementsByName("position");
    let size = choises.length;
    let value = "";

    for(let i = 0; i < size; i++){
        if(choises.item(i).checked){
            value = choises.item(i).value;
        }
    }
    
    //選択された値で切り替え、HTMLを追加。

    var result = element1.insertAdjacentHTML(value, "<li>" + value + "</li>");
}

document.getElementById("toAjaxPage").onclick = function() {
    //Ajaxページへ遷移する。
    window.location.href = "ajax.html"
}