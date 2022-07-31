//ON LOAD
document.addEventListener("DOMContentLoaded", function(){
    loadHome();
});

//CONSTANT
//var basePath="";
var basePath="https://github.com/matteo-dinoia/matteo-dinoia";

//HOME PAGE LOADING
function loadHome(){
    utilsHttp.request("../snippets/", function(response){
        console.log(response);
        utilsHtml.insertInnerHtml("#main-content", response);
    });
};
