window.onload= function(){
    var n=0;
    setInterval(timerTim,1000);
    getLocation();
    setInterval(getLocation2,5000);
    }
function sayHello(){
    var z= document.getElementById("Bye");
    z.innerHTML="hello there";
}

function getLocation(){
    var x= document.getElementById("Location");
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showFirstPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

}

function showFirstPosition(position){
    var initialLongtitude=position.coords.longitude;
    var initialLatitute=position.coords.latitude;
    var x= document.getElementById("Location");
    x.innerHTML = "Beginning Latitude: " + initialLatitute + 
        "<br>Beginning Longitude: " + initialLongtitude;
}
function getLocation2(){
    var x= document.getElementById("Location");
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showSecondPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }}
function showSecondPosition(position){
    var initialLongtitude=position.coords.longitude;
    var initialLatitute=position.coords.latitude;
    var x= document.getElementById("Location2");
    x.innerHTML = "Current Latitude: " + initialLatitute + 
        "<br>Current Longitude: " + initialLongtitude;
}

function timerTim(){
    var date= new Date();
    var aB= document.getElementById("time");
    aB.innerHTML=date.toLocaleTimeString();
}



    
    


