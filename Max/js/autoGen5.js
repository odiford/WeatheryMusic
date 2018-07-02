// inlets and outlets
inlets = 1;
outlets = 6;

// global variables and arrays
var numGenerators = 0;
var seqcounter = 0;
var thereverse = 0;
var thevalues = new Array(128);
var currentGens = 0;

// Maxobj variables for scripting
var theDacs = new Array(128);
var theGenerators = new Array(128);
var theWeathers = new Array(128);
//var theUps = new Array(128);
var theIDs = new Array(128);
var thefunnel;
var dacOuts = [1,3,5,7,9];

for(var i=0;i<128;i++){theGenerators[i]= 0;}

// methods start here

// sliders -- generates and binds the sliders in the max patch
function generators(val)
{

	if(arguments.length) // bail if no arguments
	{

		// parse arguments
		var reqGen = arguments[0];
		var reqArr = reqGen-1;

		if(reqGen<1) post('error'); // too few sliders, set to 0
		if(reqGen>128) reqGen = 128; // too many sliders, set to 128

		if(theGenerators[reqArr]==0)
		{
			post("adding a gen...");
			post();

			theIDs[reqArr] = this.patcher.newdefault(100+(reqArr*150), 50, "mira.channel", "id"+reqGen);
			theWeathers[reqArr] = this.patcher.newdefault(100+(reqArr*150), 80, "weatherGet");
			theGenerators[reqArr] = this.patcher.newdefault(100+(reqArr*150), 110, "MusicMachine2");
			theDacs[reqArr] = this.patcher.newdefault(100+(reqArr*150), 140, "dac~", dacOuts[reqArr]);

			this.patcher.connect(theIDs[reqArr], 0,theWeathers[reqArr], 0);
			this.patcher.connect(theWeathers[reqArr], 0,theGenerators[reqArr], 0);
			this.patcher.connect(theWeathers[reqArr], 1,theGenerators[reqArr], 1);
			this.patcher.connect(theWeathers[reqArr], 2,theGenerators[reqArr], 2);
			this.patcher.connect(theWeathers[reqArr], 3,theGenerators[reqArr], 3);
			this.patcher.connect(theGenerators[reqArr], 0, theDacs[reqArr], 0);

		}

				//this.patcher.connect(ourself, k, theTogs[k], 0);

	  else if(theGenerators[reqArr]!==0)
		{
			post("subtracting a gen...");
			post();

			this.patcher.remove(theDacs[reqArr]);
			this.patcher.remove(theGenerators[reqArr]);
			this.patcher.remove(theWeathers[reqArr]);
			this.patcher.remove(theIDs[reqArr]);
			theGenerators[reqArr]= 0;

		}


	}

	else // complain about arguments
	{
		post("sliders message needs arguments");
		post();
	}
}