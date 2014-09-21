'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the MyApp
 */
angular.module('MyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
