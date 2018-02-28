var x = document.getElementById("Location");

function getLocation(){
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
    x.innerHTML= "latitude = "+ position.coords.latitude+ " longtitude = "+ position.coords.longitude;
}
