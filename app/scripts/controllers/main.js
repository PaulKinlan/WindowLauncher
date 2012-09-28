'use strict';

mobiletesterApp.controller('MainCtrl', function($scope) {
  $scope.configurations = [];
  $scope.url = "";

  chrome.storage.onChanged.addListener(function(changes, namespace) {
    var configs = $scope.configurations;
    var configLength = configs.length;

    for(var key in changes) {
      var newValue = changes[key].newValue;
      var oldValue = changes[key].oldValue;

      if(!!newValue == true) {
        // new element
        $scope.configurations.push(newValue);
        $scope.$apply();
        return;
      }

      if(!!newValue == false) {
        // delete oldvalue
        return;
      }

      //update
      for(var i = 0; i< configLength; i++) {
        var config = configs[i];
        var newValue = value.newValue;
        if(configs.name == value.oldValue.name) {
          configs.name = newValue.name;
          configs.width = parseInt(newValue.width);
          configs.height = parseInt(newValue.height);
          configs.checked = newValue.checked;
          return;
        }
      }
    }
  });
    
  chrome.storage.local.get(null, function(values) {
    for(var key in values) {
      $scope.configurations.push(values[key]);
    }

    $scope.$apply()
  });

  $scope.launch = function() {
    var config;
    for(var i = 0; config = $scope.configurations[i]; i++) {
      if(!!config.checked == false) continue;
      var width = (config.width == 0) ? 100 : config.width;
      var height = (config.height == 0) ? 100 : config.height;
      chrome.app.window.create("view.html", {
        id: config.key,
        width: width,
        height: height,
        minWidth: width,
        minHeight: height,
        maxWidth: width,
        maxHeight: height
      }, function(appWindow) {
        appWindow.contentWindow.url = $scope.url;
      });
    }  
  };
});
