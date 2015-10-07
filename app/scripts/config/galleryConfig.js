(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .factory('galleryConfigService', galleryConfigService);
  galleryConfigService.$inject = [];

  function galleryConfigService (options) {

    var options = options || {};
    var storageName = options.storageName || 'img';
    var canvasWidth = options.canvasWidth || 150;
    var canvasHeight = options.canvasHeight || 150;
    var thumbDimension = options.thumbDimension || 150;

    return {
      options: options,
      storageName: storageName,
      canvasWidth: canvasWidth,
      canvasHeight: canvasHeight,
      thumbDimension: thumbDimension,
    };
  };
})();
