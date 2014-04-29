// disable tab and backspace
document.onkeydown = function (e) {
  if(e.which == 8 || e.which == 9){
    return false;
  }
}
