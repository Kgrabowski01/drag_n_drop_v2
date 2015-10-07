(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .directive('initGallery', function () {
    return {
      restrict: 'AE',
      template: '<input class="dropper" type="file" accept="image/*" custom-on-change="ctrl.uploadFile"><div ng-repeat="img in ctrl.images"><thumbnail data="img"></thumbnail></div>',
      transclude: true,
      controller: 'UploadCtrl',
      controllerAs: 'ctrl',
      bindToController: {
        images:'='
       },
      scope: {},
      link: function($scope, $attrs, $element) {
        // $scope.$watch(angular.bind(vm, function () {
        //   return vm.images;
        // }), function (newVal, oldVal) {
        //   console.log(newVal);
        //   console.log(oldVal);
        // },true);
      }
    }
  })

// testowy controller do watcha
  .controller('someCtrl', function ($scope) {
    var vm = this;
    vm.title = ['xxxx'];
    this.changeXX = function () {
      vm.title.push('aaaa');
    };
    $scope.$watch(angular.bind(vm, function () {
      return vm.title;
    }), function (newVal, oldVal) {
      console.log(oldVal);
      console.log(newVal);
    },true);
  })

})();
