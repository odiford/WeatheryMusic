inlets = 1;
outlets = 1;
var channel;
var user;
var messOut;

var quotes ='"';
var fuck;

function parseMe(inchannel,inuser)
{
	
	messOut = "osascript -e 'tell application \"Terminal\" to activate do script \"gst-launch-1.0 pulsesrc device=" + inchannel + 
				" ! audioconvert ! vorbisenc ! oggmux ! shout2send mount=stream" + inuser +
 			".ogg port=8001 username=source password=hackyou ip=127.0.0.1 & export APP_PID=$!\\" 
				+ quotes + " in window " + inuser +"'"; 
				
	outlet(0,"osascript","-e","'tell","application",'\"Terminal\"',"to","activate","do","script",
			'\"gst-launch-1.0',"pulsesrc","device="+inchannel,"!","audioconvert","!","vorbisenc",
			"!","oggmux","!","shout2send","mount=stream"+inuser+".ogg","port=8001","username=source",
			"password=hackyou","ip=127.0.0.1","&","export",'APP_PID'+inuser+'=$!\\"',"in","window","1'");
}

