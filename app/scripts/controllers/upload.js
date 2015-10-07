'use strict';

angular.module('dragNDropV2App')
.controller('UploadCtrl', ['$scope', function ($scope) {
  var vm = this;

  vm.uploadFile = function (event){
    var files = event.target.files;
    var reader = new FileReader ();
    for ( var i = 0, img ; img = files[i]; i++ ) {
      var item = URL.createObjectURL(files[i]);
      vm.images.push(item);
    };
  };

  // $scope.$watch(angular.bind(vm, function () {
  //   return vm.images;
  // }), function (newVal, oldVal) {
  //   console.log(newVal);
  //   console.log(oldVal);
  // },true);

}])
