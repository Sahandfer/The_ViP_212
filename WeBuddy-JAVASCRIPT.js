function show() {
    alert("Hi there");
}

function sayHello(){
    var x= document.getElementById("Location");
    x.innerHTML="hello";
}

function getLocation() {
   var x= document.getElementById("Location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var x= document.getElementById("Location");
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

