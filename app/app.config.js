'use strict';

angular.
  module('boardBusterApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/home', {
          template: '<home></home>'
        }).
        when('/games', {
          template: '<games></games>'
        }).
        when('/contact', {
          template: '<contact></contact>'
        }).
        when('/games/:gameId', {
          template: '<detail></detail>'
        }).
        otherwise('/home');
    }
  ]);
