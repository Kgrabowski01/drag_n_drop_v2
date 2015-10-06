(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .factory('localStorageService', localStorageService);
  localStorageService.$inject = [];

  function localStorageService () {
    var base64LocalStorageArray = [];

    return {
      toDataUlrArray: toDataUlrArray,
    };

    function toDataUlrArray (dataUrl) {
      var tempUrl = dataUrl.src;
      var imgLocalStor = "img";
      base64LocalStorageArray.push(tempUrl);
      localStorage.setItem(imgLocalStor, JSON.stringify(base64LocalStorageArray));
      console.log (base64LocalStorageArray)
    };
  };
})();
