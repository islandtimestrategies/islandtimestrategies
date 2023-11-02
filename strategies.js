let slidenumber=1;
let srcprefix ="index_files/music%20video%20mockup%20reduced";
let slide = document.getElementById("slide");
var audioObj;

window.onload = function() {
    
}


function arrow_click(){
    slidenumber += 1;
    slide.src=srcprefix+slidenumber+'.webp';
    if (slidenumber == 3){
        hide_elem("arrow");
        change_slide(slidenumber);
    } else if (slidenumber > 13){
        hide_elem("vaporware");
        audioObj = new Audio("index_files/white_tee.m4a");
        audioObj.addEventListener("canplaythrough", event => {
            audioObj.play();});
    }
    
};

function arrow_click_two(){
    console.log("clik");
        hide_elem("vaporware");
        audioObj = new Audio("index_files/white_tee.m4a");
        audioObj.addEventListener("canplaythrough", event => {
            audioObj.play();});
    
};

function change_slide(slidenumber){
    slidenumber += 1;
    if (slidenumber == 8){
        setTimeout(function(){
            slide.src=srcprefix+slidenumber+'.webp';
            change_slide(slidenumber);
        }, 2000);
    }else if (slidenumber == 13){
        setTimeout(function(){
            slide.src=srcprefix+slidenumber+'.webp';
            change_slide(slidenumber);
        }, 620);
    }else if (slidenumber < 14){
        setTimeout(function(){
            slide.src=srcprefix+slidenumber+'.webp';
            change_slide(slidenumber);
        }, 1500);
    }else if (slidenumber == 14){
        setTimeout(function(){
            hide_elem("slide");
            unhide_elem("vaporware");
        }, 600);
    }
}


function make_opaque(elem_name) {
  document.getElementById(elem_name).style.opacity = "100%"; 
}
function hide_elem(elem_name) {
  document.getElementById(elem_name).style.display = "none"; 
}
function unhide_elem(elem_name) {
  document.getElementById(elem_name).style.display = "block"; 
}
function unhide_class(class_name) {
    var list_class_elem = document.getElementsByClassName(class_name);
    for (i=0; i<list_class_elem.length; i++){
        var element = list_class_elem[i];
        element.style.display = 'block';
    }
}
function hide_class(class_name) {
    var list_class_elem = document.getElementsByClassName(class_name);
    for (i=0; i<list_class_elem.length; i++){
        var element = list_class_elem[i];
        element.style.display = 'none';
    }
}
 