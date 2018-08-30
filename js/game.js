'use strict';

// var Piece = function (id) {
//     this.toGuess = false;
//     this.id = id;
// };

var game = (function () {


    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        pieces = [],

        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
            placePieces();
        },

        getNumberOfPieces = function () {
            return currentNumberOfPieces;
        },

        placePieces = function () {
            var i,
                randomPosition;
                pieces = [];

            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
                pieces[i].toGuess = false;
            }

            randomPosition = getRandomPosition(currentNumberOfPieces);
            if(pieces[randomPosition].toGuess === false) {
                pieces[randomPosition].toGuess = true;
            }

            return pieces;

        },

        getRandomPosition = function(number) {
            return Math.floor(Math.random() * number);
        },

        getPieces = function () {
            return pieces;
        };




    return {
        'startGame': startGame,
        'getNumberOfPieces': getNumberOfPieces,
        'getPieces': getPieces
    }
})();