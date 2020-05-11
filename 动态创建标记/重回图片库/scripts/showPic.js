function addLoadEvent(func){
    let oldonload=window.onload;
    if(typeof window.onload != "function"){
        window.onload=func;
    }else{
        window.onload=function () {
            oldonload();
            func();
        }
    }
}
function insertAfter(newElement,targetElement) {
    let parentElement=targetElement.parentNode;
    if(parentElement.lastChild==targetElement){
        parentElement.appendChild(newElement);
    }else{
        parentElement.insertBefore(newElement,targetElement.nextSibling);
    }

}
function preparePlaceholder() {
    let placeholder=document.createElement("img")
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","./images/b%20(2).jpeg");
    placeholder.setAttribute("alt","");
    let description=document.createElement("p");
    description.setAttribute("id","description");
    let txt=document.createTextNode("change the image");
    description.appendChild(txt);
    let gallery=document.getElementById("image_gallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
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
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
