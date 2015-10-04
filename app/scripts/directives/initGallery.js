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
        console.log(item);
        vm.images.push(item);
        console.log(vm.images);

      };
    };
  $scope.$watch('images', function () {console.log("git");},true);
  }])

  .directive('initGallery', function () {
    return {
      restrict: 'AE',
      template: '<input type="file" custom-on-change="ctrl.uploadFile"><div ng-repeat="img in ctrl.images"><thumbnail data="img"></thumbnail></div>',
      transclude: true,
      controller: 'GalleryCtrl',
      controllerAs: 'ctrl',
      bindToController: {images:'='},
      scope: {},
      link: function($scope, $attrs, $element) {

      }
    }
  })

  .directive('test', function () {
    return {
      restrict: 'E',
      template: '<a>Test!</a>'
    }
  })

})();
