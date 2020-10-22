var doc = document.getElementById("johari");
var degree = 0;

function rotateImage(){
    doc.style.transition = "transform 2s";
    doc.style.transform = "rotate(" + (degree += 90) + "deg)";
}

