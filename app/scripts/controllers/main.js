'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the MyApp
 */
angular.module('MyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
