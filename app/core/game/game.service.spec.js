// 'use strict';

// describe('Game', function() {
//   var $httpBackend;
//   var Game;
//   var gamesData = [
//     {name: 'Game X'},
//     {name: 'Game Y'},
//     {name: 'Game Z'}
//   ];

//   // Add a custom equality tester before each test
//   beforeEach(function() {
//     jasmine.addCustomEqualityTester(angular.equals);
//   });

//   // Load the module that contains the `Game` service before each test
//   beforeEach(module('core.game'));

//   // Instantiate the service and "train" `$httpBackend` before each test
//   beforeEach(inject(function(_$httpBackend_, _Game_) {
//     $httpBackend = _$httpBackend_;
//     $httpBackend.expectGET('games/games.json').respond(gamesData);

//     Game = _Game_;
//   }));

//   // Verify that there are no outstanding expectations or requests after each test
//   afterEach(function () {
//     $httpBackend.verifyNoOutstandingExpectation();
//     $httpBackend.verifyNoOutstandingRequest();
//   });

//   it('should fetch the games data from `/games/games.json`', function() {
//     var games = Game.query();

//     expect(games).toEqual([]);

//     $httpBackend.flush();
//     expect(games).toEqual(gamesData);
//   });

// });
