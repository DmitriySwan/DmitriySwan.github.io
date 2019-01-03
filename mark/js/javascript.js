var btn = document.getElementById("NextButton");
var c = 0;
var testinput1 = document.getElementById("testinput1");
var testinput2 = document.getElementById("testinput2");
var forminput1 = document.getElementById("forminput1");
var forminput2 = document.getElementById("forminput2");
var forminput3 = document.getElementById("forminput3");
btn.addEventListener("click", hustle, false);

function hustle() {
    var firsts = document.getElementsByName("name1");
    for (var i = 0; i < firsts.length; i++) {
        if (firsts[0].checked) {
            c++;
            firsts[0].checked = false;
            break;

        }

    }
    var seconds = document.getElementsByName("name2");
    for (var i = 0; i < seconds.length; i++) {
        if (seconds[1].checked) {
            c++;
            seconds[1].checked = false;
            break;
        }
    }
    var thirds = document.getElementsByName("name3");
    for (var i = 0; i < thirds.length; i++) {
        if (thirds[2].checked) {
            c++;
            thirds[2].checked = false;
            break;
        }
    }
    var fourths = document.getElementsByName("name4");
    for (var i = 0; i < fourths.length; i++) {
        if (fourths[0].checked) {
            c++;
            fourths[0].checked = false;
            break;
        }
    }
    var fifths = document.getElementsByName("name5");
    for (var i = 0; i < fifths.length; i++) {
        if (fifths[1].checked) {
            c++;
            fifths[1].checked = false;
            break;
        }
    }
    var sixths = document.getElementsByName("name6");
    for (var i = 0; i < sixths.length; i++) {
        if (sixths[0].checked) {
            c++;
            sixths[0].checked = false;
            break;
        }
    }
    console.log(c);
    console.log(testinput1.value);
    console.log(testinput2.value);
}
var clickths = document.getElementsByName("name6");
for (var i = 0; i < clickths.length; i++) {
    clickths[i].onclick = hustla;
}

function hustla() {
    var scroll = document.getElementsByClassName("index-page");
    scroll[0].style.overflow = "hidden";
    console.log(scroll[0].style.overflow);
    var clas = document.getElementsByName("name6");
    for (var i = 0; i < clas.length; i++) {
        if (clas[0].checked) {
            c++;
            break;
        }
    }
    popupslide();
}

function popupslide() {
    if (c <= 3) {
        var overlay1 = document.getElementById("overlay3");
        overlay1.style.display = "block";
    } else if (c == 4) {
        var overlay2 = document.getElementById("overlay1");
        overlay2.style.display = "block";
    } else if (c == 5) {
        var overlay3 = document.getElementById("overlay1");
        overlay3.style.display = "block";
    } else if (c == 6) {
        var overlay4 = document.getElementById("overlay2");
        overlay4.style.display = "block";
    }
}
var popupBtn = document.getElementById("popup_btn");
var popupBtn1 = document.getElementById("popup_btn1");
var popupBtn2 = document.getElementById("popup_btn2");
popupBtn.addEventListener("click", starfunc, false);
popupBtn1.addEventListener("click", starfunc, false);
popupBtn2.addEventListener("click", starfunc, false);

function starfunc(e) {
    forminput1.value = testinput1.value;
    forminput2.value = testinput2.value;
    forminput3.value = c;
    e.preventDefault();
}
