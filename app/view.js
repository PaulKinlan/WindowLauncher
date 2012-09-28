var browser;

onresize = function() {
  var rect = document.body.getBoundingClientRect();
  browser.width = rect.width;
  browser.height = rect.bottom;
}

onload = function() {
  browser = document.getElementById("b"); 
  setTimeout(function() {
    browser.src = url;
    onresize();
  },1000);
}
