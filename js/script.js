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
        utilsHtml.insertInnerHtml("#main-content", response);
    });
};

//HOME PAGE LOADING
function loadPhotoGallery(){
    utilsHttp.request(basePath+"../snippets/photo-element-snippet.html", function(photoElement){
    utilsHttp.request(basePath+"../snippets/photo-gallery-snippet.html", function(photoGallery){

        //Reset
        utilsHtml.insertInnerHtml("#main-content", photoGallery); 

        //Gallery
        var col=[0, 0, 0];
        var selCol=0;
        for(var i=0; i<53; i++){
            var height=Math.floor(100+Math.random() * 400);
            var temp=utilsHtml.replacePlaceholder(photoElement,
                "{{height}}", height+"px");
            temp=utilsHtml.replacePlaceholder(temp,
                "{{content}}", i);
            
            //Deciding column
            if(col[0]<=col[1]|| col[0]<=col[2]) selCol=0;
            else if(col[1]<=col[2]) selCol=1;
            else selCol=2
            
            //inserting
            col[selCol]+=height;
            utilsHtml.insertInnerHtml("#col"+(selCol+1), temp, true);
        }
    });
    });
};
