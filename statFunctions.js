var charStats = [];
var charSkills = [];
var charClass = "";
var charLevel = 1;
var chosenProf = [];

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
	if (document.getElementById(stat).innerHTML == "") {return ""};
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
		proficiencyClick(document.getElementById("skill1")); //acrobatics
		proficiencyClick(document.getElementById("skill16")); //sleight of hand
		proficiencyClick(document.getElementById("skill17")); //stealth
		proficiencyClick(document.getElementById("skill4")); //athletics
		proficiencyClick(document.getElementById("skill3")); //arcana
		proficiencyClick(document.getElementById("skill6")); //history
		proficiencyClick(document.getElementById("skill9")); //investigation
		proficiencyClick(document.getElementById("skill11")); //nature
		proficiencyClick(document.getElementById("skill15")); //religion
		proficiencyClick(document.getElementById("skill2")); //animal
		proficiencyClick(document.getElementById("skill7")); //insight
		proficiencyClick(document.getElementById("skill10")); //medicine
		proficiencyClick(document.getElementById("skill12")); //perception
		proficiencyClick(document.getElementById("skill18")); //survival
		proficiencyClick(document.getElementById("skill5")); //deception
		proficiencyClick(document.getElementById("skill8")); //intimidation
		proficiencyClick(document.getElementById("skill13")); //performance
		proficiencyClick(document.getElementById("skill14")); //persuasion
}


function proficiencyClick(proficiency) {
	skillName = proficiency.value;
	skillRoot=checkSkillRoot(skillName);
	skillValue = "";
	console.log(chosenProf);
	if (proficiency.checked) {
		if(hasAttrVal(skillRoot)) {
			skillValue = calculateMods(skillRoot)+profMod;
			profMod = getProfMod();
			chosenProf.push(skillName);
		}
		else {
			skillValue = profMod;
			profMod = getProfMod();
			chosenProf.push(skillName);
		}
	}
	else {
		if(hasAttrVal(skillRoot)) {
			skillValue = calculateMods(skillRoot);
			removeElement(chosenProf, skillName);
		}
		else {
			skillValue = "";
			removeElement(chosenProf, skillName);
		}
	}
	document.getElementById(skillName).innerHTML = skillValue;
}


function hasAttrVal(attribute) {
	return document.getElementById(attribute).innerHTML != "";
}

function chosenProficiencies() {
	for (var i=1; i<=18; i++){
		var skill = "skill"+i;
		var checked = $('#'+skill).is(':checked');
		if (checked) {
			var name = $('#'+skill).attr('name');
			if(!chosenProf.includes(name)) {
				chosenProf.push(name);
			}
		}
	}
}

function checkProficiencyBox() {
	for (var i=1; i<=18; i++){
		var skill = "skill"+i;
		$('#'+skill).prop('checked', false);
	}
	chosenProf.forEach(function(proficiency) {
		console.log(proficiency);
		var skill = skillProfMap[proficiency];
		$('#'+skill).prop('checked', true);
	});
}

function skillProcessing() {
	for (var i=1; i<=18; i++){
		var skill = "skill"+i;
		// var checked = $('#'+skill).attr('checked', true);
		// var checked = $('#'+skill)[0].checked;
		var checked = $('#'+skill).is(':checked');
		var name = $('#'+skill).attr('name');
		console.log(name +" is checked? "+checked);
	}
}

function checkSkillRoot(skill) {
	StrArray = ["athletics"];
	DexArray = ["acrobatics","sleight of hand", "stealth"];
	IntelArray = ["arcana","history","investigation","nature", "religion"];
	WisArray = ["animal handling", "insight", "medicine","perception","survival"];
	ChaArray = ["deception", "intimidation","performance","persuasion"];
	if(StrArray.includes(skill)) return "str";
	if(DexArray.includes(skill)) return "dex";
	if(IntelArray.includes(skill)) return "intel";
	if(WisArray.includes(skill)) return "wis";
	if(ChaArray.includes(skill)) return "cha";
	else return "invalid skill";
}

function removeElement(arr, value) {
	var index = arr.indexOf(value);
	if (index > -1) {
       arr.splice(index, 1);
    }
}

var skillProfMap = {"acrobatics":"skill1", 
"animal handling":"skill2",
"arcana":"skill3",
"athletics":"skill4",
"deception":"skill5",
"history":"skill6",
"insight":"skill7",
"intimidation":"skill8",
"investigation":"skill9",
"medicine":"skill10",
"nature":"skill11",
"perception":"skill12",
"performance":"skill13",
"persuasion":"skill14",
"religion":"skill15",
"sleight of hand":"skill16",
"stealth":"skill17",
"survival":"skill18"};