document.addEventListener("DOMContentLoaded", function(){
    loadHome();
});



//HOME PAGE LOADING
function loadHome(){
    utilsHttp.request("../snippets/", function(response){
        console.log(response);
        utilsHtml.insertInnerHtml("#main-content", response);
    });
};
