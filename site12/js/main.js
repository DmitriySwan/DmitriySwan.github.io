if (window.matchMedia('(max-width: 750px)').matches) {
    var maps = document.getElementsByClassName("map_item");
    var c;
    var i;
    var links = document.getElementsByClassName("map__store--item hide2")
    document.getElementsByClassName("map__store--wrap")[0].onclick = function (Event) {
        for (i = 0; i < links.length; i++) {
            if (links[i] === Event.target) {
                handler();
                c = i;
                main();
                return;
            }
        }
    }
}

function handler() {
    for (c = 0; c < maps.length; c++) {
        maps[c].style.display = "none";
    }
}

function main() {
    maps[c + 1].style.display = "block";
    maps[c + 1].style.marginTop = "0px";
}
document.getElementById("click2").onclick = function () {
    handler();
    maps[0].style.display = "block";
}
