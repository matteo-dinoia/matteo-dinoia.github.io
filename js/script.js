//ON LOAD
document.addEventListener("DOMContentLoaded", function(){
    loadHome();
});

//CONSTANT FOR GETTING FILE
var basePath=""; //for debug
if(window.location.hostname ==="matteo-dinoia.github.io"){
    basePath="https://raw.githubusercontent.com/matteo-dinoia/matteo-dinoia.github.io/master/js/";
}
    

//HOME PAGE LOADING
function loadHome(){
    utilsHttp.request(basePath+"../snippets/home-snippet.html", function(response){
        console.log(response);
        utilsHtml.insertInnerHtml("#main-content", response);
    });
};
