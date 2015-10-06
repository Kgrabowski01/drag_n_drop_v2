(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .directive('thumbnail', function (procesingService, localStorageService) {
    return {
      restrict: 'E',
      template: '<canvas height="150" width="150"></canvas>',
      replace: true,
      scope: {
        data: '=',
      },
      link: function($scope, $attrs, $element) {
        var canvas = $attrs[0];
        var context = canvas.getContext ("2d");
        var imageObj = new Image ();
        imageObj.src = $scope.data;
        imageObj.onload = function() {
          procesingService.scaleImage (imageObj);
          context.drawImage (imageObj, canvas.width/2 - imageObj.width/2, canvas.height/2 - imageObj.height/2 , imageObj.width ,imageObj.height);
          procesingService.fullSizeClick (canvas, imageObj.src);
          localStorageService.toDataUlrArray (imageObj);
        };
      }
    }
  })

})();
