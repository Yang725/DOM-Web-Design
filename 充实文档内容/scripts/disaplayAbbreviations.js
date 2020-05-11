function addLoadEvent(func) {
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

function displayAbbreviations() {
    let abbreviations=document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return false;

    let defs = new Array();
    for (let i = 0; i < abbreviations.length; i++) {
        let definition = abbreviations[i].getAttribute("title");
        var key = abbreviations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    let dlist=document.createElement("dl");
    for (let key in defs) {
        let definition = defs[key];
        let dtitle = document.createElement("dt");
        let dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        let ddesc = document.createElement("dd");
        let ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    let header = document.createElement("h2");
    let header_text = document.createTextNode("Abbreviation");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
function displayCitations(){
    let quotes = document.getElementsByTagName("blockquote");
    for (let i = 0; i < quotes.length; i++) {
        if(!quotes[i].getAttribute("cite")) continue;
        let url = quotes[i].getAttribute("cite");
        let quoteChildren = quotes[i].getElementsByTagName("*");
        if (quoteChildren.length<1) continue;
        let elem = quoteChildren[quoteChildren.length-1];
        let link = document.createElement("a");
        let source = document.createTextNode("source");
        link.setAttribute("href",url)
        link.appendChild(source);
        let sup = document.createElement("sup");
        sup.appendChild(link);
        elem.appendChild(sup)

    }
}
addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
