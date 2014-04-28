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

// THE WHOLE GAME
CD.gameData = [];

// ELEMENTS
CD.game = document.getElementById("game");
CD.story = document.getElementById("story");
CD.question = document.getElementById("question");
CD.leftDialog = document.getElementById("leftDialog");
CD.rightDialog = document.getElementById("rightDialog");

// TEST OBJECTS
// CD.testStory = {
//   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque elementum fringilla. Praesent semper ac risus in condimentum. Donec elementum magna at nibh ultrices lacinia. Integer sit amet imperdiet arcu, pulvinar fringilla nisl. Vivamus cursus, diam quis convallis ultricies, mi nisl feugiat dolor, non placerat tellus dui vitae lectus. Nam vestibulum vestibulum faucibus. Morbi ac lobortis nibh.",
//   location: "story"
// };
// CD.testQuestion = {
//   content: "Can I help you?",
//   location: "question"
// };
// CD.testLeft = {
//   content: "I can't even right now.",
//   location: "leftDialog"
// }
// CD.testRight = {
//   content: "I am just so gratuitous.",
//   location: "rightDialog"
// }

// MAJOR FUNCTIONS
CD.addSegment = function(object) {
  CD.gameData.push(object);
};

// Moves to next gameData module
CD.advanceModule = function() {
  if (gameDataPointer != 0) {
    gameDataPointer++;
  }
};

// Advances through content array
CD.advanceContent = function() {

}

// Sets up display
CD.build = function(object) {
  CD.mode = object.mode;

  if (object.mode == "story") {
    if object.bg != CD.game.style.backgroundImage {
      CD.game.style.backgroundImage = "/media/images" + object.bg;
    }
  } else if (object.mode == "battle") {

  } else {
    alert "What the heck!?";
  };

  object.content
};

CD.playGame = function() {
  CD.setup();
  CD.build();
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
CD.createText = function(object) {
  div = document.createElement("DIV");
  words = document.createTextNode(object.content);
  div.appendChild(words);
  div.classList.add("animated");
  div.classList.add("fadeIn");

  switch (object.location) {
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

CD.fadeText = function() {
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

CD.removeText = function(object) {
  switch (object.location) {
  case "story":
    if (CD.story.firstChild != 'undefined' && CD.story.firstChild != null) {
      CD.story.firstChild.remove();
    }
    break;
  case "question":
    if (CD.question.firstChild != 'undefined' && CD.question.firstChild != null) {
      CD.question.firstChild.remove();
    }
    break;
  case "leftDialog":
    if (CD.leftDialog.firstChild != 'undefined' && CD.leftDialog.firstChild != null) {
      CD.leftDialog.firstChild.remove();
    }
    break;
  case "rightDialog":
    if (CD.rightDialog.firstChild != 'undefined' && CD.rightDialog.firstChild != null) {
      CD.rightDialog.firstChild.remove();
    }
    break;
  }
};
