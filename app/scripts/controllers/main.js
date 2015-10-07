'use strict';

angular.module('dragNDropV2App')
.controller('MainCtrl', function ($scope,galleryConfigService) {
  var vm = this;
  vm.images = [];
  var storageArray = function (tabb) {
    var xx = galleryConfigService.storageName;
    return xx;
  }
  console.log(storageArray());
  // Tu nie bardzo wiem jak inaczej ustawic wartosc tego ifa, tak aby dane były z configa
  if (localStorage.img) {
    var filesDataUrl = angular.fromJson(localStorage.img);
    vm.images = filesDataUrl;
  }
});
