/*******************************
Team: Squirrel Island
Event: Ludum Dare 29
Code: Nicholas La Roux
Sound & Story: Robert Whitaker
Art: Christina Ramos
*******************************/
var CD = {};

// ELEMENTS
CD.game = document.getElementById("game");
CD.story = document.getElementById("story");
CD.question = document.getElementById("question");
CD.leftDialog = document.getElementById("leftDialog");
CD.rightDialog = document.getElementById("rightDialog");

CD.mentalState = 0;
CD.gameDataPointer = 0;
CD.contentDataPointer = 0;
CD.battleData = {
  player: {
    numLight: 0,
    elem: CD.leftDialog,
    txt: ""
  },
  computer: {
    numLight: 0,
    elem: CD.rightDialog,
    txt: "",
    interval: null
  }
};

// THE WHOLE GAME
CD.gameData = [];

// GAME PROGRESSION
// Moves to next gameData module
CD.advanceModule = function() {
  CD.gameDataPointer++;
  CD.contentDataPointer = 0;
  CD.build(CD.gameData[CD.gameDataPointer]);
};

// Advances through content array
CD.advanceContent = function() {
  CD.contentDataPointer++;

  if (CD.contentDataPointer == CD.gameData[CD.gameDataPointer].content.length) {
    CD.advanceModule();
  } else {
    CD.build(CD.gameData[CD.gameDataPointer]);
  }
};

CD.keypress = function(e) {
  var key = e.keyCode || e.which;
  return String.fromCharCode(key);
};

CD.lightLetters = function(battleData) {
  var elem = battleData.elem;
  var numLight = battleData.numLight;
  var txt = battleData.txt;

  //clear the text element
  elem.innerHTML = "";
  //create a new span element
  var s = document.createElement("span");
  //set the span element text to white
  s.style.color = "#fff";
  //put all the lit up elements into the white-text span
  for(var i=0; i<numLight; i++) {
    s.innerHTML += txt.charAt(i);
  }
  //add the span element to the text element
  elem.appendChild(s);
  //add the rest of the letters (the grey ones) to the text element
  for(var i=numLight; i<txt.length; i++)
    elem.innerHTML += txt.charAt(i);
};

CD.setupBattle = function(object) {
  CD.createText(object, object.content[CD.contentDataPointer].question, "question");
  // setTimeout(function(){
  //   CD.createText(object, object.content[CD.contentDataPointer].good, "leftDialog");
  // }, 1500);
  CD.createText(object, object.content[CD.contentDataPointer].good, "leftDialog");
  // setTimeout(function(){
  //   CD.createText(object, object.content[CD.contentDataPointer].bad, "rightDialog");
  // }, 1500);
  CD.createText(object, object.content[CD.contentDataPointer].bad, "rightDialog");

  CD.battleData.player.txt = object.content[CD.contentDataPointer].good;
  CD.battleData.computer.txt = object.content[CD.contentDataPointer].bad;

  //listen for keypresses and handle them
  document.onkeypress = function(event) {
    var elem = CD.battleData.player.elem;
    var numLight = CD.battleData.player.numLight;
    var txt = CD.battleData.player.txt;

    //move the current element past any space
    while(CD.battleData.player.numLight < txt.length && txt.charAt(CD.battleData.player.numLight) == ' ')
        CD.battleData.player.numLight++;
    //if the key press matches the current character, light the next char up
    if(CD.keypress(event) === txt.charAt(numLight).toLowerCase()) {
        CD.battleData.player.numLight++;
        CD.lightLetters(CD.battleData.player);

        if (CD.battleData.player.numLight == CD.battleData.player.txt.length) {
          CD.mentalState++;
          CD.clearCombatantData();
          CD.advanceContent();
        }
    }
  };
};

CD.clearCombatantData = function() {
  document.onkeypress = null;
  clearInterval(CD.battleData.computer.interval);
  CD.battleData.computer.interval = null;
  CD.battleData.player.numLight = 0;
  CD.battleData.player.txt = "";
  CD.battleData.computer.numLight = 0;
  CD.battleData.computer.txt = "";
}

CD.setupStory = function(object) {
  // setTimeout(function(){
  //   CD.createText(object, object.content[CD.contentDataPointer], "story");
  // }, 1500);
  CD.createText(object, object.content[CD.contentDataPointer], "story");
};

// Sets up display
CD.build = function(object) {
  CD.removeText();
  CD.setBG(object);
  //CD.playMusic(object);

  if (object.mode == "story") {
    CD.setupStory(object);
  } else if (object.mode == "battle") {
    CD.setupBattle(object);
  } else {
    console.log("Non story or battle mode detected!");
  };
};

CD.playGame = function() {
  CD.setup();
  CD.build(CD.gameData[CD.gameDataPointer]);
};

// CLEANUP
CD.resetContent = function() {
  CD.removeText();
  CD.contentDataPointer = 0;
  CD.game.style.backgroundImage = "";
}

CD.resetAll = function() {
  CD.resetContent();
  CD.gameDataPointer = 0;
};

// SETUP
CD.addSegment = function(object) {
  CD.gameData.push(object);
};

// Adds all modules to the gameData variable
CD.setup = function() {
  for (key in Modules.content)
    this.addSegment(Modules.content[key])
};

CD.setBG = function(object) {
  if (object.bg != 'undefined' && object.bg != null && object.bg != CD.game.style.backgroundImage) {
    CD.game.style.backgroundImage = "url(\'/media/img/" + object.bg + "\')";
  };
};

// TEXT FUNCTIONS
CD.createText = function(object, content, location) {
  div = document.createElement("DIV");
  words = document.createTextNode(content);
  div.appendChild(words);
  div.classList.add("animated");
  div.classList.add("fadeIn");

  if (object.mode == "story") {
    if (object.content.length > (CD.contentDataPointer + 1)) {
      div.setAttribute("onclick", "CD.advanceContent()");
    } else if (Object.keys(Modules.content).length > (CD.gameDataPointer + 1)) {
      div.setAttribute("onclick", "CD.advanceModule()");
    } else {
      div.setAttribute("onclick", "alert('You won, congratulations!')");
    }
  };

  // if (object.content.length > (CD.contentDataPointer + 1)) {
  //   div.setAttribute("onclick", "CD.advanceContent()");
  // } else if (Object.keys(Modules.content).length > (CD.gameDataPointer + 1)) {
  //   div.setAttribute("onclick", "CD.advanceModule()");
  // } else {
  //   div.setAttribute("onclick", "alert('You won, congratulations!')");
  // }

  switch (location) {
  case "story":
    CD.story.appendChild(div);
    break;
  case "question":
    CD.question.appendChild(div);
    break;
  case "leftDialog":
    CD.leftDialog.appendChild(div);
    break;
  case "rightDialog":
    CD.rightDialog.appendChild(div);
    break;
  }
};

CD.removeText = function() {
  // removes node if it exists, fixes first node issue
  if (CD.story.firstChild != 'undefined' && CD.story.firstChild != null) {
    CD.story.firstChild.classList.remove("fadeIn");
    CD.story.firstChild.classList.add("fadeOut");
    // setTimeout(function(){CD.story.firstChild.remove();}, 1000);
    CD.story.firstChild.remove();
  }

  if (CD.question.firstChild != 'undefined' && CD.question.firstChild != null) {
    CD.question.firstChild.classList.remove("fadeIn");
    CD.question.firstChild.classList.add("fadeOut");
    // setTimeout(function(){CD.question.firstChild.remove();}, 2000);
    CD.question.firstChild.remove();
  }

  if (CD.leftDialog.firstChild != 'undefined' && CD.leftDialog.firstChild != null) {
    CD.leftDialog.firstChild.classList.remove("fadeIn");
    CD.leftDialog.firstChild.classList.add("fadeOut");
    // setTimeout(function(){CD.leftDialog.firstChild.remove();}, 2000);
    CD.leftDialog.firstChild.remove();
  }

  if (CD.rightDialog.firstChild != 'undefined' && CD.rightDialog.firstChild != null) {
    CD.rightDialog.firstChild.classList.remove("fadeIn");
    CD.rightDialog.firstChild.classList.add("fadeOut");
    // setTimeout(function(){CD.rightDialog.firstChild.remove();}, 2000);
    CD.rightDialog.firstChild.remove();
  }
};
