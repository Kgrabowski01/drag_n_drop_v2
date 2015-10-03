(function(){
  'use strict';
  angular.module('dragNDropV2App')
  
  .factory('procesingService', procesingService);
  procesingService.$inject = [];		
  
  function procesingService () {
    return {
      scaleImage: scaleImage,
      fullSizeClick: fullSizeClick
    };
    
    function scaleImage (imageObj) {
      var thumbDimension = 150;
      var tempObj = imageObj;
      if (tempObj.width > tempObj.height) {
        tempObj.height = (thumbDimension * tempObj.height) / tempObj.width;
        tempObj.width = thumbDimension;
      } else {
        tempObj.width = (thumbDimension * tempObj.width) / tempObj.height;
        tempObj.height = thumbDimension;
      };
      return tempObj;
    };
    
    function fullSizeClick (elem, target) {
      elem.onclick = function () {
        window.open("" + target + "", "_blank", "width:100%;height:100%");
      };
    };
  };  
})();
