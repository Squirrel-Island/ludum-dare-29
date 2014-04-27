var CD = {};
CD.story = document.getElementById("story");
CD.question = document.getElementById("question");

CD.playGame = function() {
  CD.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque elementum fringilla. Praesent semper ac risus in condimentum. Donec elementum magna at nibh ultrices lacinia. Integer sit amet imperdiet arcu, pulvinar fringilla nisl. Vivamus cursus, diam quis convallis ultricies, mi nisl feugiat dolor, non placerat tellus dui vitae lectus. Nam vestibulum vestibulum faucibus. Morbi ac lobortis nibh.");
  //CD.createTextNode("What is your favourite color?");
}

CD.createTextNode = function(text) {
  div = document.createElement("DIV");
  words = document.createTextNode(text);
  div.appendChild(words);
  div.classList.add("animated");
  div.classList.add("fadeIn");
  CD.story.appendChild(div);
}
