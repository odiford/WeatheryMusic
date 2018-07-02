
var ajaxreq;
var cloudpct;
var tempfar;
var rain;
var snow;
var windy;
var lat;
var lon;

inlets = 3;
outlets = 7;



function coordSet(inval)
{
	var coords = inval;
	var coordArray = coords.split("\,");
	lat = coordArray[0];
	lon = coordArray[1];
	post(lat);
	post();
	post(lon);
	post();

}


function fooget()
{
	ajaxreq = new XMLHttpRequest();
	ajaxreq.open("GET","api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=a67d2bcf7f59bbaf978c95c4d88f1fdd");
	ajaxreq.onreadystatechange = readystatechange_parsejson;
	ajaxreq.send("{}");
	post("oaueh");
}

function readystatechange_parsejson()
{
	if (this.readyState ==4 && this.status == 200){
 		var myobj = JSON.parse(this.responseText);
		//	post(this.responseText);
		tempfar = ((myobj.main.temp * (9/5)) - 459.67).toFixed(1);
		cloudpct = myobj.clouds.all;
		//rain = myobj["rain"]["3h"];
		//snow = myobj["snow"]["3h"];
		windy = (myobj.wind.speed * 2.2369).toFixed(1);
		weatherfactor();
	}
}

function weatherfactor()
{
	//this will output a numerical factor that will determine the general quality of the music
	//it will be a complex number
	post("oaueh");
	outlet(0, tempfar + "°");
	post(tempfar + "°");
	outlet(1, cloudpct + "%");
	post(cloudpct+ "%");
	outlet(2, windy + "mph");
	post(windy + "mph");

	outlet(3, parseFloat(tempfar));
	outlet(4, parseFloat(cloudpct));
	outlet(5, parseFloat(windy));
	post("turnon");
	outlet(6, 1);
	
}

function out()
{
	outlet(3, parseFloat(tempfar));
	outlet(4, parseFloat(cloudpct));
	outlet(5, parseFloat(windy));
	outlet(6, 1);
}
