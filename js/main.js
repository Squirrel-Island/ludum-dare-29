/*******************************
Team: Squirrel Island
Event: Ludum Dare 29
Code: Nicholas La Roux
Sound & Story: Robert Whitaker
Art: Christina Ramos
*******************************/

var CD = {};
CD.mentalState = 0;
CD.mode = "story";
CD.gameDataPointer = 0;
CD.contentDataPointer = 0;

// THE WHOLE GAME
CD.gameData = [];

// ELEMENTS
CD.game = document.getElementById("game");
CD.story = document.getElementById("story");
CD.question = document.getElementById("question");
CD.leftDialog = document.getElementById("leftDialog");
CD.rightDialog = document.getElementById("rightDialog");

// GAME PROGRESSION
// Moves to next gameData module
CD.advanceModule = function() {
  CD.gameDataPointer++;
  CD.build(CD.gameData[CD.gameDataPointer]);
  CD.contentDataPointer = 0;
};

// Advances through content array
CD.advanceContent = function(object) {
  CD.contentDataPointer++;
  CD.build(CD.gameData[CD.gameDataPointer]);
}

// Sets up display
CD.build = function(object) {
  CD.mode = object.mode;
  CD.removeText();

  if (object.bg != 'undefined' && object.bg != null && object.bg != CD.game.style.backgroundImage) {
    CD.game.style.backgroundImage = "url(\'/media/pictures/" + object.bg + "\')";
  };

  if (object.mode == "story") {
    setTimeout(function(){
      CD.createText(object, object.content[CD.contentDataPointer], "story");
    }, 1500);
  } else if (object.mode == "battle") {
    CD.createText(object, object.content[CD.contentDataPointer].question, "question");
    setTimeout(function(){
      CD.createText(object, object.content[CD.contentDataPointer].good, "leftDialog");
    }, 1500);
    setTimeout(function(){
      CD.createText(object, object.content[CD.contentDataPointer].bad, "rightDialog");
    }, 1500);
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
    CD.game.style.backgroundImage = "url(\'/media/pictures/" + object.bg + "\')";
  };
};

CD.playMusic = function(object) {
  if (object.bg != 'undefined' && object.bg != null && object.bg != THE-CURRENT-SONG) {
    // CODE TO SET MUSIC UP --- SOUNDJS
  };
};

// TEXT FUNCTIONS
CD.createText = function(object, content, location) {
  div = document.createElement("DIV");
  words = document.createTextNode(content);
  div.appendChild(words);
  div.classList.add("animated");
  div.classList.add("fadeIn");

  // EVENTUALLY FOR WHEN ACTUAL BATTLES START
  // if (object.mode == "story") {
  //   if (object.content.length > (CD.contentDataPointer + 1)) {
  //     div.setAttribute("onclick", "CD.advanceContent()");
  //   } else if (Object.keys(Modules.content).length > (CD.gameDataPointer + 1)) {
  //     div.setAttribute("onclick", "CD.advanceModule()");
  //   } else {
  //     div.setAttribute("onclick", "alert('You won, congratulations!')");
  //   }
  // };

  if (object.content.length > (CD.contentDataPointer + 1)) {
    div.setAttribute("onclick", "CD.advanceContent()");
  } else if (Object.keys(Modules.content).length > (CD.gameDataPointer + 1)) {
    div.setAttribute("onclick", "CD.advanceModule()");
  } else {
    div.setAttribute("onclick", "alert('You won, congratulations!')");
  }

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
    setTimeout(function(){CD.story.firstChild.remove();}, 1000);
  }

  if (CD.question.firstChild != 'undefined' && CD.question.firstChild != null) {
    CD.question.firstChild.classList.remove("fadeIn");
    CD.question.firstChild.classList.add("fadeOut");
    setTimeout(function(){CD.question.firstChild.remove();}, 2000);
  }

  if (CD.leftDialog.firstChild != 'undefined' && CD.leftDialog.firstChild != null) {
    CD.leftDialog.firstChild.classList.remove("fadeIn");
    CD.leftDialog.firstChild.classList.add("fadeOut");
    setTimeout(function(){CD.leftDialog.firstChild.remove();}, 2000);
  }

  if (CD.rightDialog.firstChild != 'undefined' && CD.rightDialog.firstChild != null) {
    CD.rightDialog.firstChild.classList.remove("fadeIn");
    CD.rightDialog.firstChild.classList.add("fadeOut");
    setTimeout(function(){CD.rightDialog.firstChild.remove();}, 2000);
  }
};
