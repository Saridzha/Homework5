btn.addEventListener("click",fnc);
function fnc(){
    console.log(a.checked);
    console.log(б.checked);
    console.log(в.checked);
    console.log(г.checked);
    console.log(д.checked);
    if (д.checked){
        alert("Правильный ответ!:)");
    } else {
        alert("Неправильный ответ:(");
    }
}