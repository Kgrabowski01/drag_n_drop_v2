'use strict';


angular.module('dragNDropV2App')
.controller('MainCtrl', function ($scope) {
  var vm = this;
  vm.images = [];

    if (localStorage.img) {
      var filesDataUrl = angular.fromJson(localStorage.img);
      vm.images = filesDataUrl;
    }
    
    vm.clearLocalStorage = function () {
      localStorage.img = [];
    }


  // $scope.$watch(angular.bind(vm, function () {
  //   return vm.images;
  // }), function (newVal, oldVal) {
  //   console.log(newVal);
  //   console.log(oldVal);
  // });

  /*

  .controller('someCtrl', function ($scope) {
  var vm = this;
  vm.title = ['xxxx'];
  this.changeXX = function () {
  vm.title.push('aaaa');
};
$scope.$watch(angular.bind(vm, function () {
return vm.title;
}), function (newVal, oldVal) {
console.log(newVal);
console.log(oldVal);
},true);
})

*/


});
