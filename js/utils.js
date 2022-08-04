
//HTTP REQUEST
window.utilsHttp={};
utilsHttp.request=function (url, responseHandler){
    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if ((Http.readyState == 4) && (Http.status == 200)) {
            responseHandler(Http.responseText);
        }
    }
}


//HTML MODIFICATION
window.utilsHtml={};
utilsHtml.insertInnerHtml=function(selector, html, append){
    if(append===undefined){append==false;}
    if(html===undefined){html="";}
    if(append){
        document.querySelector(selector).innerHTML+=html;
    }
    else{
        document.querySelector(selector).innerHTML=html;
    }
    
};

utilsHtml.replacePlaceholder=function(string, placeholderName, textToSubstitute){
    var res=string.replace(placeholderName, textToSubstitute);
    return res;
};