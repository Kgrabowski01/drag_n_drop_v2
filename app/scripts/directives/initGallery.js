(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .controller('GalleryCtrl', ['$scope', function($scope) {

    var vm = this;
    vm.imagesTab = ['blob:null/f95394ea-8448-4305-94f5-301ae8093ad8','blob:null/3bf180b7-8501-44e0-82f7-18d22c197479'];

    $scope.uploadFile = function(event){
      var files = event.target.files;
      var reader = new FileReader ();
      for ( var i = 0, img ; img = files[i]; i++ ) {
        var item = URL.createObjectURL(files[i]);
        console.log(item);
        vm.imagesTab.push(item);
        console.log(vm.imagesTab);
      };
    };

  }])

  .directive('initGallery', function () {
    return {
      restrict: 'AE',
      template: '<input type="file" custom-on-change="uploadFile">',
      controller: 'GalleryCtrl',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        images: '='
      },
      link: function($scope, $attrs, $element) {
        console.log($scope.images);
        console.log($attrs);
        console.log($element);
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
