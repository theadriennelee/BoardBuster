'use strict';

angular.
  module('core.game').
  factory('Game', ['$resource',
    function($resource) {
      return $resource('games/:gameId.json', {}, {
        query: {
          method: 'GET',
          params: {gameId: 'games'},
          isArray: true
        }
      });
    }
  ])
  .service('gameService', function() {
      var gameDetails = {};
      var detailId = {};

      this.setGameDetails = function (data) {
        localStorage.setItem("gameDetails", JSON.stringify(data));
      }

      this.getGameDetails = function () {
        if(localStorage.getItem('gameDetails') != null) {
          return JSON.parse(localStorage.getItem('gameDetails'));
        }
      }

      // this.setDetailId = function (data) {
      //   detailId = data;
      // }

      // this.getDetailId = function () {
      //   return detailId;
      // }
    });
