onload = function() {
  var url = document.getElementById("url");
  var make = document.getElementById("make");

  make.onclick = function() {
    chrome.app.window.create("view.html", {width: 1024, height: 768, frame: "chrome"}, function(w) {
      w.contentWindow.url = url.value;   
    });
  };
};
