'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$routeParams',
      function homeController($routeParams) {
          console.log("here");
      }
    ]
  });
