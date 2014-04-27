var CD = {};
CD.story = document.getElementById("story");
CD.question = document.getElementById("question");
CD.testStory = {
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque elementum fringilla. Praesent semper ac risus in condimentum. Donec elementum magna at nibh ultrices lacinia. Integer sit amet imperdiet arcu, pulvinar fringilla nisl. Vivamus cursus, diam quis convallis ultricies, mi nisl feugiat dolor, non placerat tellus dui vitae lectus. Nam vestibulum vestibulum faucibus. Morbi ac lobortis nibh.",
  location: "story"
};
CD.testQuestion = {
  content: "Can I help you?",
  location: "question"
};

CD.playGame = function() {
  CD.createTextNode(CD.testStory);
  CD.createTextNode(CD.testQuestion);
}

CD.testFade = function() {
  // removes node if it exists, thus, not the first time
  if (CD.story.firstChild != 'undefined' && CD.story.firstChild != null) {
    CD.story.firstChild.classList.remove("fadeIn");
    CD.story.firstChild.classList.add("fadeOut");
  }

  if (CD.question.firstChild != 'undefined' && CD.question.firstChild != null) {
    CD.question.firstChild.classList.remove("fadeIn");
    CD.question.firstChild.classList.add("fadeOut");
  }
}

CD.createTextNode = function(object) {
  // removes node if it exists, thus, not the first time
  switch (object.location) {
  case "story":
    if (CD.story.firstChild != 'undefined' && CD.story.firstChild != null) {
      CD.story.appendChild(div);
    }
    break;
  case "question":
    if (CD.question.firstChild != 'undefined' && CD.question.firstChild != null) {
      CD.question.appendChild(div);
    }
    break;
  }
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
  }
}
