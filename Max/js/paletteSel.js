inlets=1;
outlets=5;
var noise = 0;
var kick = 1;
var snare = 2;
var chord = 3;
var scale = 4;
var num;


function groupSel(inTemp){
	if(inTemp<=50){
		 num = 1;
		 outlet(scale,getRandomInt(2),1);
		}
	if(inTemp>50 && inTemp<=70){
		 num = 2;
		 outlet(scale,getRandomInt(3)+1,1);
		}
	if(inTemp>70){
		 num = 3;
		 outlet(scale,getRandomInt(2)+3,1);
		}
		
	outlet(noise, "noise"+num);
	outlet(kick, "kick"+num);
	outlet(snare, "snare"+num);
	outlet(chord, "chord"+num);
	
	}
	
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}