var draggables = document.querySelectorAll('.left .cardl');
var droppables = document.querySelectorAll('.right');



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("aa", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("aa");
    ev.target.appendChild(document.getElementById(data));
}


