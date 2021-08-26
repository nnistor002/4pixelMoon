let currentArticle = "";
let video = "";


function close_BTN(){
     document.getElementById('articleContainer').style.visibility = "hidden";
     document.getElementById(currentArticle).style.visibility = "hidden";

     video.pause();

     currentArticle = "";
     video = "";
}

function moon_BTN(){
     currentArticle = "moonArticle"
     document.getElementById('articleContainer').style.visibility = "visible";
     document.getElementById(currentArticle).style.visibility = "visible";

     video = document.getElementById('moon_v');
     video.play();
}

function mercury_BTN(){
     currentArticle = "mercuryArticle"
     document.getElementById('articleContainer').style.visibility = "visible";
     document.getElementById(currentArticle).style.visibility = "visible";

     video = document.getElementById('mercury_v');
     video.play();
}

function mars_BTN(){
     currentArticle = "marsArticle"
     document.getElementById('articleContainer').style.visibility = "visible";
     document.getElementById(currentArticle).style.visibility = "visible";

     video = document.getElementById('mars_v');
     video.play();

}

function venus_BTN(){
     currentArticle = "venusArticle"
     document.getElementById('articleContainer').style.visibility = "visible";
     document.getElementById(currentArticle).style.visibility = "visible";

     video = document.getElementById('venus_v');
     video.play();
}

function earth_BTN(){
     currentArticle = "earthArticle"
     document.getElementById('articleContainer').style.visibility = "visible";
     document.getElementById(currentArticle).style.visibility = "visible";

     video = document.getElementById('earth_v');
     video.play();
}

function neptune_BTN(){
     currentArticle = "neptuneArticle"
     document.getElementById('articleContainer').style.visibility = "visible";
     document.getElementById(currentArticle).style.visibility = "visible";

     video = document.getElementById('neptune_v');
     video.play();
}

function uranus_BTN(){
     currentArticle = "uranusArticle"
     document.getElementById('articleContainer').style.visibility = "visible";
     document.getElementById(currentArticle).style.visibility = "visible";

     video = document.getElementById('uranus_v');
     video.play();
}

function saturn_BTN(){
     currentArticle = "saturnArticle"
     document.getElementById('articleContainer').style.visibility = "visible";
     document.getElementById(currentArticle).style.visibility = "visible";

     video = document.getElementById('saturn_v');
     video.play();
}

function jupiter_BTN(){
     currentArticle = "jupiterArticle"
     document.getElementById('articleContainer').style.visibility = "visible";
     document.getElementById(currentArticle).style.visibility = "visible";

     video = document.getElementById('jupiter_v');
     video.play();
}

function sun_BTN(){
     currentArticle = "sunArticle"
     document.getElementById('articleContainer').style.visibility = "visible";
     document.getElementById(currentArticle).style.visibility = "visible";

     video = document.getElementById('sun_v');
     video.play();
}