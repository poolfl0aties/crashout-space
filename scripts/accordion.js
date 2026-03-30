function accordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("shown") == -1) {
    x.className += " shown";
  } else {
    x.className = x.className.replace(" shown", "");
  }
}