window.onload= function(){
    var n=0;
    var totalDistance= 0;
    var initialLongtitude=0;
    var initialLatitute=0;
    var currentLongtitude=0;
    var currentLatitute=0;
    setInterval(timerTim,1000);
    getLocation();
    setInterval(getLocation2,5000);
    setInterval(distanceWalked,5000);
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
    initialLongtitude=position.coords.longitude;
    initialLatitute=position.coords.latitude;
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
    currentLongtitude=position.coords.longitude;
    currentLatitute=position.coords.latitude;
    var x= document.getElementById("Location2");
    x.innerHTML = "Current Latitude: " + currentLatitute + 
        "<br>Current Longitude: " + currentLongtitude;
    
}



function timerTim(){
    var date= new Date();
    var aB= document.getElementById("time");
    aB.innerHTML=date.toLocaleTimeString();
}



function distanceWalked(){
var mapIndicate= document.getElementById("map");
    
var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(currentLatitute-initialLatitute);  // deg2rad below
  var dLon = deg2rad(currentLongtitude-initialLongtitude); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(initialLatitute)) * Math.cos(deg2rad(currentLatitute)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c * 1000; // Distance in meters.
    totalDistance += d;
    mapIndicate.innerHTML="Distance walked: "+totalDistance +" meters!";
}


function deg2rad(deg) {
  return deg * (Math.PI/180);
}
