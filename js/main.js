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
    interval: null,
    difficulty: 1
  }
};

// THE WHOLE GAME
CD.gameData = [];

// GAME PROGRESSION
// Moves to next gameData module
CD.advanceModule = function() {
  CD.gameDataPointer++;
  CD.contentDataPointer = 0;

  if (CD.gameData.length <= CD.gameDataPointer)
    return;

  CD.build(CD.gameData[CD.gameDataPointer]);

  if (CD.gameData[CD.gameDataPointer].bgm)
    CD.Assets.playBGM(CD.gameData[CD.gameDataPointer].bgm, {volume: 0.6});
  if (CD.gameData[CD.gameDataPointer].sfx)
    CD.Assets.playSFX(CD.gameData[CD.gameDataPointer].sfx);
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

CD.lightLettersComp = function(battleData) {
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
  CD.question.style.marginTop = "20%";

  // Hide dialogs
  CD.leftDialog.classList.add("hidden");
  CD.leftDialog.classList.remove("visible");
  CD.rightDialog.classList.add("hidden");
  CD.rightDialog.classList.remove("visible");

  CD.createText(object, object.content[CD.contentDataPointer].question, "question");

  setTimeout(function(){
    CD.createText(object, object.content[CD.contentDataPointer].good, "leftDialog");
    CD.createText(object, object.content[CD.contentDataPointer].bad, "rightDialog");

    CD.battleData.player.txt = object.content[CD.contentDataPointer].good;
    CD.battleData.computer.txt = object.content[CD.contentDataPointer].bad;

    CD.battleData.computer.interval = setInterval(function(){
      var elem = CD.battleData.computer.elem;
      var numLight = CD.battleData.computer.numLight;
      var txt = CD.battleData.computer.txt;

      //move the current element past any space
      while(CD.battleData.computer.numLight < txt.length && txt.charAt(CD.battleData.computer.numLight) == ' ')
        CD.battleData.computer.numLight++;

      CD.battleData.computer.numLight++;
      CD.lightLettersComp(CD.battleData.computer);

      // Check to see if computer won
      if (CD.battleData.computer.numLight == CD.battleData.computer.txt.length) {
        CD.mentalState--;
        CD.clearCombatantData();
        CD.advanceContent();
      }

    }, CD.battleData.computer.difficulty * 1000)

    //listen for keypresses and handle them
    document.onkeypress = function(event) {
      var elem = CD.battleData.player.elem;
      var numLight = CD.battleData.player.numLight;
      var txt = CD.battleData.player.txt;

      //move the current element past any space
      while(numLight < txt.length && txt.charAt(numLight) == ' ')
          numLight++;

      CD.battleData.player.numLight = numLight;
      //if the key press matches the current character, light the next char up
      if(CD.keypress(event) === txt.charAt(numLight).toLowerCase()) {
          CD.Assets.playSFX('pop', {volume: 1});
          CD.battleData.player.numLight++;
          CD.lightLetters(CD.battleData.player);

          // Check to see if player won
          if (CD.battleData.player.numLight == CD.battleData.player.txt.length) {
            CD.mentalState++;
            CD.clearCombatantData();
            CD.advanceContent();
          }
      }
    }

  var interDat = {
    i: 20,
    inter: null
  };
  interDat.inter = setInterval(function() {
    interDat.i = interDat.i-2;
    if(interDat.i>2)
      CD.question.style.marginTop = interDat.i+"%";
    else {
      CD.question.style.marginTop = "2%";
      clearInterval(interDat.inter);
    }
  }.bind(interDat),20);

  // Show dialogs
  CD.leftDialog.classList.add("visible");
  CD.leftDialog.classList.remove("hidden");
  CD.rightDialog.classList.add("visible");
  CD.rightDialog.classList.remove("hidden");
  }, 3000);
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
  CD.createText(object, object.content[CD.contentDataPointer], "story");
};

// Sets display none to unused text divs
CD.fixDisplayCSS = function(mode) {
  if (mode == "story") {
    CD.question.classList.add("hidden");
    CD.question.classList.remove("visible");
    // CD.leftDialog.classList.add("hidden");
    // CD.leftDialog.classList.remove("visible");
    // CD.rightDialog.classList.add("hidden");
    // CD.rightDialog.classList.remove("visible");
    CD.story.classList.add("visible");
    CD.story.classList.remove("hidden");
  } else if (mode == "battle") {
    CD.question.classList.add("visible");
    CD.question.classList.remove("hidden");
    // CD.leftDialog.classList.add("visible");
    // CD.leftDialog.classList.remove("hidden");
    // CD.rightDialog.classList.add("visible");
    // CD.rightDialog.classList.remove("hidden");
    CD.story.classList.add("hidden");
    CD.story.classList.remove("visible");
  } else {
    console.log("Non story or battle mode detected!");
  };
};

// Sets up display
CD.build = function(object) {
  CD.removeText();
  CD.setBG(object);
  CD.fixDisplayCSS(object.mode);

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

  CD.Assets.loadAssets([
    {
      type: "bgm",
      id: "story",
      fileName: "CD-story-track.ogg"
    },
    {
      type: "bgm",
      id: "battle",
      fileName: "CD-battle-theme-2.ogg"
    },
    {
      type: "sfx",
      id  : "pop",
      fileName: "pop.ogg"
    },
    {
      type: "img",
      id: "battlePic",
      fileName: "battle.jpg"
    },
    {
      type: "img",
      id: "jail-close",
      fileName: "jail-close.jpg"
    },
    {
      type: "img",
      id: "jail-far",
      fileName: "jail-far.jpg"
    },
  ], function(){
    CD.build(CD.gameData[CD.gameDataPointer]);
    if (CD.gameData[CD.gameDataPointer].bgm)
      CD.Assets.playBGM(CD.gameData[CD.gameDataPointer].bgm,{volume: 0.6});
    if (CD.gameData[CD.gameDataPointer].sfx)
      CD.Assets.playSFX(CD.gameData[CD.gameDataPointer].sfx);
  })
};

CD.setBG = function(object) {
  if (object.bg)
    CD.game.style.backgroundImage = "url(\'/media/img/" + object.bg + "\')";
};

// TEXT FUNCTIONS
CD.createText = function(object, content, location) {
  div = document.getElementById(location);
  div.innerHTML = "";
  words = document.createTextNode(content);
  div.appendChild(words);
  div.classList.add("animated");
  div.classList.add("fadeIn");
  CD.game.setAttribute("onclick", "null");

  if (CD.gameData[CD.gameDataPointer].mode == "story") {
    if (object.content.length > (CD.contentDataPointer + 1)) {
      CD.game.setAttribute("onclick", "CD.advanceContent()");
    } else if (Object.keys(Modules.content).length > (CD.gameDataPointer + 1)) {
      CD.game.setAttribute("onclick", "CD.advanceModule()");
    } else {
      CD.game.setAttribute("onclick", "alert('You won, congratulations!')");
    }
  }
};

CD.removeText = function() {
  // removes node if it exists, fixes first node issue
  if (CD.story.firstChild != 'undefined' && CD.story.firstChild != null) {
    CD.story.innerHTML = "";
  }

  if (CD.question.firstChild != 'undefined' && CD.question.firstChild != null) {
    CD.question.innerHTML = "";
  }

  if (CD.leftDialog.firstChild != 'undefined' && CD.leftDialog.firstChild != null) {
    CD.leftDialog.innerHTML = "";
  }

  if (CD.rightDialog.firstChild != 'undefined' && CD.rightDialog.firstChild != null) {
    CD.rightDialog.innerHTML = "";
  }
};
