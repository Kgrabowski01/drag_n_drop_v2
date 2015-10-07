(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .directive('thumbnail', function (procesingService, localStorageService, galleryConfigService) {
    return {
      restrict: 'E',
      template: '<canvas></canvas>',
      replace: true,
      scope: {
        data: '=',
      },
      link: function($scope, $attrs, $element) {
        var canvas = $attrs[0];
        canvas.height = galleryConfigService.canvasHeight;
        canvas.width = galleryConfigService.canvasWidth;
        var thumbSize = galleryConfigService.thumbDimension;
        var context = canvas.getContext ("2d");
        var imageObj = new Image ();
        imageObj.src = $scope.data;
        imageObj.onload = function() {
          procesingService.scaleImage (imageObj, thumbSize);
          context.drawImage (imageObj, canvas.width/2 - imageObj.width/2, canvas.height/2 - imageObj.height/2 , imageObj.width ,imageObj.height);
          procesingService.fullSizeClick (canvas, imageObj.src);
          localStorageService.toDataUlrArray (imageObj, galleryConfigService.storageName);
        };
      }
    }
  })

})();
