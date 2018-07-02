window.onload = function(){


var text;
var lat = 48.8597331;
var lon = 2.3517376;
var citypre;
var id;

var currentUser=0;

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      window.alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
}


document.getElementById("cnct").addEventListener("click", function() {connect();});
document.getElementById("dcnct").addEventListener("click", function() {disconnect();});

function connect(){
  //window.alert("please");
  //window.alert(parseInt(window.name) + 1);

  id = parseInt(window.name) + 1;

//  window.alert("sending");

  window.alert(lat + "," + lon);
  sendToMax("id",id); //generate subpatch
  //window.alert("sent to max id channel:" + id);

  //sendToMax("id"+id,lat + "," + lon);
  setTimeout(function(){sendToMax("id"+id,lat + "," + lon);},1000);
  //window.alert("sent to id channel:"+lat + "," + lon);
  setTimeout(function(){playAudio(id);},9500);
  //playAudio(id);
}

function disconnect(){
    //window.alert("disconnecting");
    id = parseInt(window.name) + 1;
    //audio.stop();
    //users[inID-1] = 0; //remove from user array
    sendToMax("disconnect",id);
    location.href='index2.html';
}

function sendToMax(channel,val) {
  xebra.sendMessageToChannel(channel, val);
}

function playAudio(inID){
  window.alert('http://127.0.0.1:8001/stream'+inID+'.ogg');
  var audio = new Audio('http://127.0.0.1:8001/stream'+inID+'.ogg');
  audio.play();
}

function updateWithObject(object) {
  if (object.getParamValue("varname") === "temp"){
    temp = object.getParamValue("textfield");
  }
  if (object.getParamValue("varname") === "clouds"){
    clouds = object.getParamValue("textfield");
  }
  if (object.getParamValue("varname") === "wind"){
    wind = object.getParamValue("textfield");
  }
}

var options = {
  hostname: "localhost",
  port: 8086,
  auto_connect: false,
}


getLocation();
var xebra = new Xebra.State(options);

xebra.on("object_added", updateWithObject);
xebra.on("object_changed", updateWithObject);
xebra.connect();

//
}
