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

// MAJOR FUNCTIONS
CD.addSegment = function(object) {
  CD.gameData.push(object);
};

// Moves to next gameData module
CD.advanceModule = function() {
  if (CD.gameDataPointer != 0) {
    CD.gameDataPointer++;
  }
};

// Advances through content array
CD.advanceContent = function(object) {
  // if (object.content.length > (CD.contentDataPointer + 1)) {
  //
  // }

  if (CD.contentDataPointer != 0) {
    CD.contentDataPointer++;
  };
}

// Sets up display
CD.build = function(object) {
  CD.mode = object.mode;
  CD.removeText();

  if (object.bg != 'undefined' && object.bg != null && object.bg != CD.game.style.backgroundImage) {
    CD.game.style.backgroundImage = "url(\'/media/pictures/" + object.bg + "\')";
  };

  if (object.mode == "story") {
    CD.createText(object.content[CD.contentDataPointer], "story");
  } else if (object.mode == "battle") {
    CD.createText(object.content[CD.contentDataPointer].question, "question");
    CD.createText(object.content[CD.contentDataPointer].good, "leftDialog");
    CD.createText(object.content[CD.contentDataPointer].bad, "rightDialog");
  } else {
    console.log("Non story or battle mode detected!");
  };


};

CD.playGame = function() {
  CD.setup();
  CD.build(CD.gameData[CD.gameDataPointer]);
};

CD.reset = function() {
  CD.fadeText();
  CD.clearText();
  CD.game.style.backgroundImage="";
};

CD.setup = function() {
  for (key in Modules.content)
    this.addSegment(Modules.content[key])
};

// TEXT FUNCTIONS
CD.createText = function(content, location) {
  div = document.createElement("DIV");
  words = document.createTextNode(content);
  div.appendChild(words);
  div.classList.add("animated");
  div.classList.add("fadeIn");

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
    setTimeout(function(){CD.story.firstChild.remove();}, 2500);
  }

  if (CD.question.firstChild != 'undefined' && CD.question.firstChild != null) {
    CD.question.firstChild.classList.remove("fadeIn");
    CD.question.firstChild.classList.add("fadeOut");
    setTimeout(function(){CD.question.firstChild.remove();}, 2500);
  }

  if (CD.leftDialog.firstChild != 'undefined' && CD.leftDialog.firstChild != null) {
    CD.leftDialog.firstChild.classList.remove("fadeIn");
    CD.leftDialog.firstChild.classList.add("fadeOut");
    setTimeout(function(){CD.leftDialog.firstChild.remove();}, 2500);
  }

  if (CD.rightDialog.firstChild != 'undefined' && CD.rightDialog.firstChild != null) {
    CD.rightDialog.firstChild.classList.remove("fadeIn");
    CD.rightDialog.firstChild.classList.add("fadeOut");
    setTimeout(function(){CD.rightDialog.firstChild.remove();}, 2500);
  }
};

// CD.removeText = function() {
//   if (CD.story.firstChild != 'undefined' && CD.story.firstChild != null) {
//     CD.story.firstChild.remove();
//   }
//
//   if (CD.question.firstChild != 'undefined' && CD.question.firstChild != null) {
//     CD.question.firstChild.remove();
//   }
//
//   if (CD.leftDialog.firstChild != 'undefined' && CD.leftDialog.firstChild != null) {
//     CD.leftDialog.firstChild.remove();
//   }
//
//   if (CD.rightDialog.firstChild != 'undefined' && CD.rightDialog.firstChild != null) {
//     CD.rightDialog.firstChild.remove();
//   }
// };
