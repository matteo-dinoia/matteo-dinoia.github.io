//ON LOAD
document.addEventListener("DOMContentLoaded", function(){
    loadHome();
});

//CONSTANT
//var basePath="";
var basePath="https://github.com/matteo-dinoia/matteo-dinoia/js/";

//HOME PAGE LOADING
function loadHome(){
    utilsHttp.request(basePath+"../snippets/", function(response){
        console.log(response);
        utilsHtml.insertInnerHtml("#main-content", response);
    });
};
