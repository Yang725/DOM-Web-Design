function showPic(whichpic) {
    let placeholder=document.getElementById("placeholder");
    let source=whichpic.getAttribute("href");
    placeholder.setAttribute("src",source);
    //非DOM设置属性方法
    //placeholder.src=source;
    let text=whichpic.firstChild.nodeValue;
    let description=document.getElementById("description");
    description.firstChild.nodeValue=text;
}
