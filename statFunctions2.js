var charStats = []; // this will be an ordered array [STR,DEX,CON,INT,WIS,CHA]
var charSkills = [];
var charProficiency = [];
var charLevel = 1;


//this function rolls a die with the dictated number of sides, returns int result
function rollDie(sides) {
	return (1 + Math.floor(Math.random()*sides));
}
//this function rolls X dice with a dictated number of sides, returns an array of results
function rollXDice(sides, X){
	var results = [];
	var i=0;
	while (i < X) {
		results.push(rollDie(sides));
		i++;
	}
	//console.log(results);
	return results;
}

//this array sums all elements in a given array, returns int result
function sumArray(array) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return (array.reduce(reducer));
}

//this function rolls 3d6 six times, sums the results, 
//and returns the array of stats in descending order
function rollStat3d6() {
	var rolls=[];
	var i = 0;
	while (i < 6) {
		rolls.push(sumArray(rollXDice(6,3)));
		i++;
	}
	rolls.sort(function(a,b){return b-a}); // b-a because descending order is desired
	return rolls;
}

//this function rolls 4d6, and drops the lowest result, sums the results, 
//and returns the array of stats in descending order
function rollStat4d6() {
	var rolls = [];
	var i =0;
	while(i < 6) {
		var fourd6 = rollXDice(6,4);
		fourd6.sort(function(a,b){return b-a});
		console.log(fourd6);
		fourd6.pop();
		rolls.push(sumArray(fourd6));
		i++;
	}
	console.log(rolls.sort(function(a,b){return b-a}));
}

/*thoughs
	1) map skills to indexes as listed below and save skills as an array
	of modifiers mapped to the indexes. Proficiency can then be stored as potentially 
	an array of 0 (for false/no proficiency selected) OR 1 (for true/proficient in this skill)
	Then, when constructing what the user sees, populate the skills with their natural modifier
	based on their stats, then iterate through the proficiency array, and where val = 1, add 
	ProficModifier to the value seen.
	2)OR for JSON maybe also map the full added value to the stat name....?
	3)need to include racial attributes in calculations earlier --> this could be simplified by 
	forcing a user to choose a race FIRST before assigning stats. But original design vision was
	to make a more flexible tool. Click & drag is nice, but gets sticky with racial modifiers.
	Racial modifiers need to adjust any time the user picks a different selection (when race allows
	a decision between 2 stats) -- could do something like radio buttons to help this choice.
	See old statFunctions.js for an old draft (or below)
	var raceAttr = {"elf":["dex", 2], "human":["all", 1], "dwarf":["con", 2]};

*/

var skillList = ["acrobatics", "animal handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation",
"medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight of hand", "stealth","survival"];
/*0:acrobatics
1:animal handling
2:arcana
3:athletics
4:deception
5:history
6:insight
7:intimidation
8:investigation
9:medicine
10:nature
11:perception
12:performance
13:persuasion
14:religion
15:sleight of hand
16:stealth
17:survival*/

// 0:STR, 1:DEX, 2:CON, 3:INT, 4:WIS, 5:CHA

var raceAttr = {"hill dwarf":[0,0,2,0,1,0], 
"mountain dwarf":[2,0,2,0,0,0], 
"high elf":[0,2,0,1,0,0], 
"wood elf":[0,2,0,0,1,0], 
"drow":[0,2,0,0,0,1]
"lightfoot halfling":[0,2,0,0,0,1],
"stout halfling":[0,2,1,0,0,0],
"human":[1,1,1,1,1,1],
"dragonborn":[2,0,0,0,0,1],
"forest gnome":[0,1,0,2,0,0],
"rock gnome":[0,0,1,2,0,0],
"half-elf":[0,0,0,0,0,2], //ALSO CAN CHOOSE STATS TO INCREASE SO ????
"half-orc":[2,0,1,0,0,0],
"tiefling":[0,0,0,1,0,2]
};