'use strict';

var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        guessedPieces = 0,
        pieces = [],
        shots = [],

        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
            guessedPieces = 0;
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

            numberOfPiecesToGuess = calculateNumberOfPiecesToGuess(currentNumberOfPieces);
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
            var allPiecesGuessed;

            if (pieces[id].toGuess === false) {
                return "GAME OVER";
            }

            if (pieces[id].toGuess === true && shots[id].guessed === true) {
                return "DOUBLE SHOT";
            }

            if (pieces[id].toGuess === true && shots[id].guessed === false) {

                shots[id].guessed = true;
                guessedPieces++;
                allPiecesGuessed = checkIfAllPiecesGuessed();

                if (allPiecesGuessed) {
                    return "NEXT LEVEL";
                } else {
                    return "HIT";
                }
            }
        },

        checkIfAllPiecesGuessed = function () {
            return guessedPieces === getNumberOfPiecesToGuess();
        },

        getPieces = function () {
            return pieces;
        },

        getNumberOfPieces = function () {
            return currentNumberOfPieces;
        },

        calculateNumberOfPiecesToGuess = function (currentPieces) {
            return Math.floor(currentPieces / 2 - 1);
        },

        getNumberOfPiecesToGuess = function () {
            return calculateNumberOfPiecesToGuess(currentNumberOfPieces);
        },

        getRandomPosition = function (currentPieces) {
            return Math.floor(Math.random() * currentPieces);
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
        'getPieces': getPieces,
        'getNumberOfPieces': getNumberOfPieces,
        'getNumberOfPiecesToGuess': getNumberOfPiecesToGuess,
        'makeAShot': makeAShot,
        'getNextLevel': getNextLevel,
        'restartLevel': restartLevel
    }
})();