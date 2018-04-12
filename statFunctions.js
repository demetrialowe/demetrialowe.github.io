var charStats = [];
var charSkills = [];
var charClass = "";
var charLevel = 1;

function rollStat3d6() {
	console.log("Rolling 3d6");
	var rolls=[];

	document.getElementById("str").innerHTML = "";
	document.getElementById("dex").innerHTML = "";
	document.getElementById("con").innerHTML = "";
	document.getElementById("intel").innerHTML = "";
	document.getElementById("wis").innerHTML = "";
	document.getElementById("cha").innerHTML = "";

	var d1 = 1 + Math.floor(Math.random()*6);
	var d2 = 1 + Math.floor(Math.random()*6);
	var d3 = 1 + Math.floor(Math.random()*6);
	var roll1 = d1 + d2 + d3;
	console.log("1 " + roll1);

	d1 = 1 + Math.floor(Math.random()*6);
	d2 = 1 + Math.floor(Math.random()*6);
	d3 = 1 + Math.floor(Math.random()*6);
	var roll2 = d1 + d2 + d3;
	console.log("2 " + roll2);

	d1 = 1 + Math.floor(Math.random()*6);
	d2 = 1 + Math.floor(Math.random()*6);
	d3 = 1 + Math.floor(Math.random()*6);
	var roll3 = d1 + d2 + d3;

	d1 = 1 + Math.floor(Math.random()*6);
	d2 = 1 + Math.floor(Math.random()*6);
	d3 = 1 + Math.floor(Math.random()*6);
	var roll4 = d1 + d2 + d3;

	d1 = 1 + Math.floor(Math.random()*6);
	d2 = 1 + Math.floor(Math.random()*6);
	d3 = 1 + Math.floor(Math.random()*6);
	var roll5 = d1 + d2 + d3;

	d1 = 1 + Math.floor(Math.random()*6);
	d2 = 1 + Math.floor(Math.random()*6);
	d3 = 1 + Math.floor(Math.random()*6);
	var roll6 = d1 + d2 + d3;

	rolls.push(roll1, roll2, roll3, roll4, roll5, roll6);
	rolls.sort(function(a, b){return b - a});

	document.getElementById("drag1").innerHTML = rolls[0];
	document.getElementById("drag2").innerHTML = rolls[1];
	document.getElementById("drag3").innerHTML = rolls[2];
	document.getElementById("drag4").innerHTML = rolls[3];
	document.getElementById("drag5").innerHTML = rolls[4];
	document.getElementById("drag6").innerHTML = rolls[5];
	document.getElementById("arrayBox").style.display="block";

}

function rollStat4d6Drop() {
	console.log("Rolling 4d6 drop the lowest");
	var rolls =[];

	document.getElementById("str").innerHTML = "";
	document.getElementById("dex").innerHTML = "";
	document.getElementById("con").innerHTML = "";
	document.getElementById("intel").innerHTML = "";
	document.getElementById("wis").innerHTML = "";
	document.getElementById("cha").innerHTML = "";

	var d1 = 1 + Math.floor(Math.random()*6);
	var d2 = 1 + Math.floor(Math.random()*6);
	var d3 = 1 + Math.floor(Math.random()*6);
	var d4 = 1 + Math.floor(Math.random()*6);
	var min = Math.min(d1, d2, d3, d4);
	var roll1 = d1 + d2 + d3 + d4 - min;

	d1 = 1 + Math.floor(Math.random()*6);
	d2 = 1 + Math.floor(Math.random()*6);
	d3 = 1 + Math.floor(Math.random()*6);
	d4 = 1 + Math.floor(Math.random()*6);
	min = Math.min(d1, d2, d3, d4);
	var roll2 = d1 + d2 + d3 + d4 - min;

	d1 = 1 + Math.floor(Math.random()*6);
	d2 = 1 + Math.floor(Math.random()*6);
	d3 = 1 + Math.floor(Math.random()*6);
	d4 = 1 + Math.floor(Math.random()*6);
	min = Math.min(d1, d2, d3, d4);
	var roll3 = d1 + d2 + d3 + d4 - min;

	d1 = 1 + Math.floor(Math.random()*6);
	d2 = 1 + Math.floor(Math.random()*6);
	d3 = 1 + Math.floor(Math.random()*6);
	d4 = 1 + Math.floor(Math.random()*6);
	min = Math.min(d1, d2, d3, d4);
	var roll4 = d1 + d2 + d3 + d4 - min;

	d1 = 1 + Math.floor(Math.random()*6);
	d2 = 1 + Math.floor(Math.random()*6);
	d3 = 1 + Math.floor(Math.random()*6);
	d4 = 1 + Math.floor(Math.random()*6);
	min = Math.min(d1, d2, d3, d4);
	var roll5 = d1 + d2 + d3 + d4 - min;


	d1 = 1 + Math.floor(Math.random()*6);
	d2 = 1 + Math.floor(Math.random()*6);
	d3 = 1 + Math.floor(Math.random()*6);
	d4 = 1 + Math.floor(Math.random()*6);
	min = Math.min(d1, d2, d3, d4);
	var roll6 = d1 + d2 + d3 + d4 - min;

	rolls.push(roll1, roll2, roll3, roll4, roll5, roll6);
	rolls.sort(function(a, b){return b - a});

	document.getElementById("drag1").innerHTML = rolls[0];
	document.getElementById("drag2").innerHTML = rolls[1];
	document.getElementById("drag3").innerHTML = rolls[2];
	document.getElementById("drag4").innerHTML = rolls[3];
	document.getElementById("drag5").innerHTML = rolls[4];
	document.getElementById("drag6").innerHTML = rolls[5];

	document.getElementById("arrayBox").style.display="block";

}

function insertArray() {
	var standardArray=[15, 14, 13, 12, 10, 8];
	
  	document.getElementById("str").innerHTML = "";
  	document.getElementById("dex").innerHTML = "";
  	document.getElementById("con").innerHTML = "";
  	document.getElementById("intel").innerHTML = "";
  	document.getElementById("wis").innerHTML = "";
  	document.getElementById("cha").innerHTML = "";

  	document.getElementById("drag1").innerHTML = standardArray[0];
  	document.getElementById("drag2").innerHTML = standardArray[1];
  	document.getElementById("drag3").innerHTML = standardArray[2];
  	document.getElementById("drag4").innerHTML = standardArray[3];
  	document.getElementById("drag5").innerHTML = standardArray[4];
  	document.getElementById("drag6").innerHTML = standardArray[5];

  	document.getElementById("arrayBox").style.display="block";
}

function saveStats() {
	charStats=[];
	charSkills = [];
	if (document.getElementById("str").innerHTML == "" || document.getElementById("dex").innerHTML == "" || 
		document.getElementById("con").innerHTML == "" || document.getElementById("intel").innerHTML == "" ||
		document.getElementById("wis").innerHTML == "" || document.getElementById("cha").innerHTML == "") {
		alert("Please assign all of your stats!")
	}
	else {
		charStats.push(document.getElementById("str").innerHTML);
		charStats.push(document.getElementById("dex").innerHTML);
		charStats.push(document.getElementById("con").innerHTML);
		charStats.push(document.getElementById("intel").innerHTML);
		charStats.push(document.getElementById("wis").innerHTML);
		charStats.push(document.getElementById("cha").innerHTML);

		console.log(charStats + "final");

		/*get the box out of the way*/
		document.getElementById("arrayBox").style.display="none";
		charSkills.push(document.getElementById("acrobatics").innerHTML);
		charSkills.push(document.getElementById("animal handling").innerHTML);
		charSkills.push(document.getElementById("arcana").innerHTML);
		charSkills.push(document.getElementById("athletics").innerHTML);
		charSkills.push(document.getElementById("deception").innerHTML);
		charSkills.push(document.getElementById("history").innerHTML);
		charSkills.push(document.getElementById("insight").innerHTML);
		charSkills.push(document.getElementById("intimidation").innerHTML);
		charSkills.push(document.getElementById("investigation").innerHTML);
		charSkills.push(document.getElementById("medicine").innerHTML);
		charSkills.push(document.getElementById("nature").innerHTML);
		charSkills.push(document.getElementById("perception").innerHTML);
		charSkills.push(document.getElementById("performance").innerHTML);
		charSkills.push(document.getElementById("persuasion").innerHTML);
		charSkills.push(document.getElementById("religion").innerHTML);
		charSkills.push(document.getElementById("sleight of hand").innerHTML);
		charSkills.push(document.getElementById("stealth").innerHTML);
		charSkills.push(document.getElementById("survival").innerHTML);
		console.log(charSkills);
	}
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("number", ev.target.id);
}

function drop(ev) {
	var dataThere = ev.target.innerHTML;
	ev.preventDefault();
	var data = ev.dataTransfer.getData("number");
	ev.target.innerHTML = document.getElementById(data).innerHTML;
	document.getElementById(data).innerHTML = dataThere;
	/*this lets the skill mods update while dragging and dropping*/
	/*if I want to use drag and drop later I'm definitely going to have to rework this*/
	calculateSkills();
}

function calculateMods(stat) {
	var modifier = Math.floor((parseInt(document.getElementById(stat).innerHTML) - 10)/2);
	return modifier;
}

function getProfMod() {
	if (charLevel <= 4) return 2;
	if (charLevel >= 5 && charLevel <=8) return 3;
	if (charLevel >= 9 && charLevel <=12) return 4;
	if (charLevel >= 13 && charLevel <=16) return 5;
	if (charLevel >= 17 && charLevel <=20) return 6;
	else alert("Invalid Character Level I guess");
}

function calculateSkills() {
	if (document.getElementById("dex").innerHTML != "") {
		document.getElementById("acrobatics").innerHTML=calculateMods("dex");
		document.getElementById("sleight of hand").innerHTML=calculateMods("dex");
		document.getElementById("stealth").innerHTML=calculateMods("dex");
	}
	if (document.getElementById("str").innerHTML != "") {
		document.getElementById("athletics").innerHTML=calculateMods("str");
	}
	if (document.getElementById("intel").innerHTML != "") {
		document.getElementById("arcana").innerHTML=calculateMods("intel");
		document.getElementById("history").innerHTML=calculateMods("intel");
		document.getElementById("investigation").innerHTML=calculateMods("intel");
		document.getElementById("nature").innerHTML=calculateMods("intel");
		document.getElementById("religion").innerHTML=calculateMods("intel");
	}
	if (document.getElementById("wis").innerHTML != "") {
		document.getElementById("animal handling").innerHTML=calculateMods("wis");
		document.getElementById("insight").innerHTML=calculateMods("wis");
		document.getElementById("medicine").innerHTML=calculateMods("wis");
		document.getElementById("perception").innerHTML=calculateMods("wis");
		document.getElementById("survival").innerHTML=calculateMods("wis");
	}
	if (document.getElementById("cha").innerHTML != "") {
		document.getElementById("deception").innerHTML=calculateMods("cha");
		document.getElementById("intimidation").innerHTML=calculateMods("cha");
		document.getElementById("performance").innerHTML=calculateMods("cha");
		document.getElementById("persuasion").innerHTML=calculateMods("cha");
	}
}