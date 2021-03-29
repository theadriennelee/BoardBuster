'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular
  .module('games')
  .component('games', {
    templateUrl: 'games/games.template.html',
    controller: ['$routeParams', '$scope', '$resource', 'gameService', '$http',
      function gameController($routeParams, $scope, $resource, gameService, $https) {
          console.log("here!");
          $https.get('listOfGames.json')
            .then(function(response) {
                $scope.listOfGames = response.data;
                console.log("listOfGames :: " + $scope.listOfGames);
            }, function(error) {
                alert('error');
            });
          
        //   $scope.listOfGamess = [
        //     {
        //         id : 0,
        //         name : "Cards Against Humanity",
        //         image : "img/games/cardsAgainstHumanity.png",
        //         type : "Card Game",
        //         description : "A party game for horrible people",
        //         price : "$5.00"
        //     },
        //     {
        //         id : 1,
        //         name : "The Settlers of Catan",
        //         image : "img/games/catan.jpg",
        //         type : "Board Game",
        //         description : "Trade Build Settle",
        //         price : "$10.00"
        //     },
        //     {
        //         id : 2,
        //         name : "Exploding Kittens",
        //         image : "img/games/exploddingKittens.jpg",
        //         type : "Card Game",
        //         description : "A card game for people who are into kittens and explosions",
        //         price : "$2.50"
        //     },
        //     {
        //         id : 3,
        //         name : "Citadel",
        //         image : "img/games/citadels.jpg",
        //         type : "Card Game",
        //         description : "A game of medieval cities, nobles and intrigue",
        //         price : "$3.00"
        //     },
        //     {
        //         id : 4, 
        //         name : "Codenames",
        //         image : "img/games/codenames.png",
        //         type : "Word Game",
        //         description : "Top Secret Wordgame",
        //         price : "$5.00"
        //     },
        //     {
        //         id : 5,
        //         name : "What Do You Meme",
        //         image : "img/games/whatDoYouMeme.jpeg",
        //         type : "Card Game",
        //         description : "An adult party game for meme lovers",
        //         price : "$10.00"
        //     },
        //     {
        //         id : 6, 
        //         name : "Escape Room The Game",
        //         image : "img/games/escapeRoomTheGame.jpg",
        //         type : "Board Game",
        //         description : "4 Thrilling Escape Room",
        //         price : "$7.50"
        //     },
        //     {
        //         id : 7,
        //         name : "Bananagrams",
        //         image : "img/games/bananagrams.jpeg",
        //         type : "Word Game",
        //         description : "Monkey Monkey",
        //         price : "$2.50"
        //     },
        //     {
        //         id : 8,
        //         name : "5 Second Rule",
        //         image : "img/games/5SecondRule.jpg",
        //         type : "Card Game",
        //         description : "The game of quick thinking and fast talking",
        //         price : "$2.50"
        //     },
        //     {
        //         name : "That's What She Said",
        //         image : "img/games/thatsWhatSheSaid.jpg",
        //         type : "Card Game",
        //         description : "A twisted game of innuendos",
        //         price : "$7.50"
        //     },
        //     {
        //         id : 9,
        //         name : "Never Have I Ever",
        //         image : "img/games/neverHaveIEver.png",
        //         type : "Card Game",
        //         description : "The game of poor life decisions",
        //         price : "$5.00"
        //     },
        //     {
        //         id : 10,
        //         name : "Clue",
        //         image : "img/games/clue.jpg",
        //         type : "Board Game",
        //         description : "The classic mystery game",
        //         price : "$5.00"
        //     }
        // ];
        console.log("listOfGamess ::" + $scope.listOfGamess);
        $scope.selectedGame = function(id) {
            console.log("inside function");
            console.log("id ::", id);
            console.log("testing ::", $scope.listOfGames[id]);
            // $rootScope.gameSelected = $scope.listOfGames[id];
            // console.log("game selected ::", $rootScope.gameSelected);
            console.log("#!/games/"+id);
            gameService.setGameDetails($scope.listOfGames[id]);
            window.location.href = "#!/games/"+id;
        };
      }
    ]
  });
