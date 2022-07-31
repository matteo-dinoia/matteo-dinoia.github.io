
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
utilsHtml.insertInnerHtml=function(selector, html){
    document.querySelector(selector).innerHTML=html;
};