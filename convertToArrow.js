document.getElementById("set-color").onclick = () => 
    setBackgroundColorById("paragraph", "blue");    

document.getElementById("set-color").onclick = () =>
    alert(document.getElementById("popup-input").value);

document.getElementById("set-color").onmouseover = () =>
    setBackgroundColorById("body", "red");

document.getElementById("hover-this").onmouseout = () =>
    setBackgroundColorById("body", "white");

var value = id =>
    document.getElementById(id).value;

var style = (id, color) =>
    { document.getElementById(id).style = "background-color: " + color };

var elstyle = el => 
    el.style = "background-color: black";