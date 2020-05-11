function showPic(whichpic) {
    if(!document.getElementById("placeholder"))return false;
    let placeholder = document.getElementById("placeholder");
    let source = whichpic.getAttribute("href");
    placeholder.setAttribute("src",source);
    //非DOM设置属性方法
    //placeholder.src=source;
    if(document.getElementById("description")){
    let text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
    let description=document.getElementById("description");
    description.firstChild.nodeValue=text;
    }
    return true;
}

function prepareGallery() {
    if (!document.getElementById||!document.getElementsByTagName)return false;
    if (!document.getElementById("image_gallery"))return false;
    let gallery = document.getElementById("image_gallery");
    let links=gallery.getElementsByTagName("a");
    for (var i = 0; i <links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);
        }
    }
}
function addLoadEvent(func){
    let oldonload=window.onload;
    if(typeof window.onload != 'function'){
        window.onload=func;
    }else{
        window.onload=function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
