let modInfo = {
	name        : 'The Incremental Tree',
	id          : 'GenoplexsTKT',
	author      : 'Genoplex',
	thanks      : '匿_名',
	pointsName  : '',
	discordName : '',
	discordLink : '',
	initialStartPoints: new Decimal (10),
	offlineLimit: 0,
}

// Set your version in num and name
let VERSION = {
	num: 'ersion a.0.1 Demo',
	name: '',
}

let changelog =   
`
<h1> ! Incoming Content ! </h1><br>
<br>
<h2>*Brand New Layers And Stages*<br><h3>A completely new way to increase numbers!<br><br>
<h2>*Mechanism expansion for Layer Number and Infinity*<br><h3>Choose your reset route freely!<br><br>
<h2>*CHALLENGES*<br><h3>FOR BONUS AND QOLS!<br><br><br>
<h2>*AND*<br><h3>- Achievements -<br>- Mini Games -<br>- Others -<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<h2> - Version a.0.1 Demo -</h2><br>
<br><h3>
· 4 new layers and 3 stages playable content.<br>

`
	

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function()
	{
		switch(player.Number.Stage)
		{
			case 1:
			case 2: 
			case 3: return '<br><h3>Your number has reached ' + player.Number.Number_Text; break
		}
	},
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}