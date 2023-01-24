var m = document.createElement("dialog");
var s = document.createElement("select");
var b = document.createElement("button");
var h = document.querySelector("html");

var options = ["Iframify", "ContentEditable", "Mirror", "Title", "Notepad"];
var o = [];
b.innerText = "Start";
m.open = true;
m.style.cssText = "z-index: 999; position:fixed; left: 25; top:25%; transform:translate(-25%, -25%) scale(1.5);";

options.forEach((v, i) => {
    o[i] = document.createElement("option");
    o[i].innerText = v;
    o[i].value = v;
    s.appendChild(o[i]);
});

m.appendChild(s);
m.appendChild(b);
h.style.position = "relative";
h.prepend(m);

b.addEventListener("click", () => {
    var v = s.value;
    m.remove();
    switch(v){
        case "Iframify":
            var b = document.body;
            var i = document.createElement("iframe");
            b.innerHTML = "";
            i.style.cssText = "width: 100%; height:100%; border: 0; margin: 0";
            b.style.cssText = "width: 100vw; height: 100vh; border: 0; margin: 0";
            i.src = prompt("Url");
            b.appendChild(i);
            break;
        case "ContentEditable":
            var b = document.body;
            b.contentEditable = !b.isContentEditable;
            break;
        case "Mirror":
            var w = window.open();
            w.document.body.style.cssText = "background-color: black; width: 100vw; height:100vh;";
            break;
        case "Title":
            var p = prompt("Title");
            document.title = p ? p : document.title;
            break;
        case "Notepad":
            var w = window.open();
            var t = document.createElement("textarea");
            w.document.body.style.cssText = "width: 100vw; height: 100vh; margin: 0; border: 0; padding: 4px;";
            t.style.cssText = "width: 100vw; height: 100vh; border: 0; resize: none;";
            w.document.body.appendChild(t);
            w.document.title = "Notepad";
            break;
    };
});

void 0;
