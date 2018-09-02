'use strict';

// var Piece = function (id) {
//     this.toGuess = false;
//     this.id = id;
// };

var game = (function () {


    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        pieces = [],
        shots = [],

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
            shots = [];

            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
                shots.push({});
                pieces[i].toGuess = false;
                shots[i].guessed = false;
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

        makeAShot = function (id) {
            var allPiecesGuessed = true,
                i;
            if (pieces[id].toGuess === true) {
                if (shots[id].guessed === false) {
                    shots[id].guessed = true;
                    for (i = 0; i < pieces.length; i++) {
                        if (pieces[i].toGuess === true && shots[i].guessed === false) {
                            allPiecesGuessed = false;
                        }
                    }
                    if (allPiecesGuessed === true) {
                        return "NEXT LEVEL";
                    }
                    return "OK";
                }
            } else {
                return "GAME OVER";
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
            var newNumberOfPieces = ++currentNumberOfPieces;

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
        'makeAShot': makeAShot,
        'getNextLevel': getNextLevel,
        'restartLevel': restartLevel
    }
})();