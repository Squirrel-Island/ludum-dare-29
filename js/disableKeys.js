// disable shift and backspace
document.onkeydown = function (e) {
  if(e.which == 8 || e.which == 9 || e.which == 16){
    return false;
  }
}
