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


        placePieces = function () {
            var i;
            pieces = [];

            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
                pieces[i].toGuess = false;
            }
            setPiecesToGuess(pieces);
            return pieces;

        },

        setPiecesToGuess = function (pieces) {
            var numberOfPiecesToGuess,
                numberOfSetPieces,
                randomPosition;

            numberOfPiecesToGuess = getNumberOfPiecesToGuess(currentNumberOfPieces);
            numberOfSetPieces = 0;

            while (numberOfSetPieces < numberOfPiecesToGuess) {
                randomPosition = getRandomPosition(currentNumberOfPieces);
                if (pieces[randomPosition].toGuess === false) {
                    pieces[randomPosition].toGuess = true;
                    numberOfSetPieces++;
                }
            }
        },

        getNumberOfPieces = function () {
            return currentNumberOfPieces;
        },

        getRandomPosition = function (currentPieces) {
            return Math.floor(Math.random() * currentPieces);
        },

        getNumberOfPiecesToGuess = function (currentPieces) {
            return Math.floor(currentPieces / 2 - 1);
        },

        getPieces = function () {
            return pieces;
        },

        getNextLevel = function () {
            var newNumberOfPieces = currentNumberOfPieces + 1;

            startGame({
                numberOfPieces: newNumberOfPieces,
            });
        },

        restartLevel = function () {
            startGame({
                numberOfPieces: currentNumberOfPieces,
            })
        };


    return {
        'startGame': startGame,
        'getNumberOfPieces': getNumberOfPieces,
        'getPieces': getPieces,
        'getNextLevel': getNextLevel,
        'restartLevel': restartLevel
    }
})();