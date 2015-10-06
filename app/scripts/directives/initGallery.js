(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .controller('GalleryCtrl', ['$scope', function($scope) {
    var vm = this;

    vm.uploadFile = function(event){
      var files = event.target.files;
      var reader = new FileReader ();
      for ( var i = 0, img ; img = files[i]; i++ ) {
        var item = URL.createObjectURL(files[i]);
        vm.images.push(item);
      };
    };

    vm.clearLocalStorage = function () {
      localStorage.img = [];
    }

    // $scope.$watch(angular.bind(vm, function () {
    //   return vm.images;
    // }), function (newVal, oldVal) {
    //   console.log(newVal);
    //   console.log(oldVal);
    // },true);

  }])


  .directive('initGallery', function () {
    return {
      restrict: 'AE',
      template: '<input type="file" custom-on-change="ctrl.uploadFile"><button type="button" onclick="ctrl.clearLocalStorage()">Clear localStorage</button><div ng-repeat="img in ctrl.images"><thumbnail data="img"></thumbnail></div>',
      transclude: true,
      controller: 'GalleryCtrl',
      controllerAs: 'ctrl',
      bindToController: {
        images:'=',
        clear: '&'
      },
      scope: {},
      link: function($scope, $attrs, $element) {
        //  window.addEventListener("change", function() {
        //  window.location.reload();
        //  });
      }
    }
  })


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
