'use strict';

/*
* @ngdoc function
* @name dragNDropV2App.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the dragNDropV2App
*/
angular.module('dragNDropV2App')
.controller('MainCtrl', function ($scope) {
  var vm = this;
  vm.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  vm.images = ['blob:http://localhost:9000/ef5f5a1e-9f12-4345-ad70-a882c4dcf6e9', 'blob:http://localhost:9000/e964f852-96a7-4d54-94ec-5e0e7eec7043'];
});
