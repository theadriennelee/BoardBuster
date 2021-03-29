'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('contact').
  component('contact', {
    templateUrl: 'contact/contact.template.html',
    controller: ['$routeParams', '$scope', '$sce', '$http',
      function contactController($routeParams, $scope, $sce, $https) {
          console.log("here");
          $https.get('listOfLocations.json')
            .then(function(response) {
                $scope.listOfLocations = response.data;
                console.log("listOfLocations :: " + $scope.listOfLocations);
            }, function(error) {
                alert('error');
            });
          $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }
      }
    ]
  });