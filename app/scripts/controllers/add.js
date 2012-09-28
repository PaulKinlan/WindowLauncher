'use strict';

mobiletesterApp.controller('AddCtrl', function($scope) {
  $scope.addProfile = function() {
    var key = (new Date).valueOf();
    var obj = {};
    obj[key] = {
      id: key,
      name: $scope.name,
      width: $scope.width,
      height: $scope.height,
      checked: false
    };

    chrome.storage.local.set(obj);
  };
});
