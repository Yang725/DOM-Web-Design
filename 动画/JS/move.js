function moveElement(elementID, final_x,final_y, interval) {
    if(!document.getElementById)return false;
    if(!document.getElementById(elementID))return false;
    let elem = document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    let xpos = parseInt(elem.style.left);
    let ypos = parseInt(elem.style.top);
    if(xpos === final_x && ypos === final_y) {
        return true;
    }
    if(xpos < final_x) xpos++;
    if(xpos > final_x) xpos--;
    if(ypos < final_y) ypos++;
    if(ypos > final_y) ypos --;
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    let repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}
//第一节代码
// function positionMessage(){
//     if(!document.getElementById)return false;
//     if(!document.getElementById("message"))return false;
//     let elem = document.getElementById("message");
//     elem.style.position="absolute";
//     elem.style.top = "50px";
//     elem.style.left = "100px";
//     moveElement("message",125,25,20)
// }


//第二节代码
function prepareSlideshow() {
    let preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";
    let list = document.getElementById("linklist");
    let links = list.getElementsByTagName("a");
    for (let i = 0; i <links.length; i++) {
        links[i].onmouseover = function () {

            moveElement("preview",-160*(i+1),0,1);
        }
     }
    // links[0].onmouseover = function () {
    //     moveElement("preview",-100,0,10);
    //}
}
function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
    addLoadEvent(prepareSlideshow);
