'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('detail').
  component('detail', {
    templateUrl: 'detail/detail.template.html',
    controller: ['$routeParams', '$scope', 'gameService', '$http',
      function DetailController($routeParams, $scope, gameService, $https) {
        $scope.gameDetails = gameService.getGameDetails();
        $https.get('listOfLocations.json')
            .then(function(response) {
                $scope.listOfLocations = response.data;
                console.log("listOfLocations :: " + $scope.listOfLocations[0].name);
            }, function(error) {
                alert('error');
            });     
          $(function () {
            $('.datepicker').datepicker({
                format: 'mm/dd/yyyy',
            });
          });
          $scope.rentGame = function(id) {
            console.log("location ::", $scope.selectedLocation);
            console.log("date ::", $scope.selectedDate);
        };
        $("#btnRent").click(
          function action () {
            alert("Game has successfully been rented. Please check your email for confirmation.");
          }
        );
      }
    ]
  });
