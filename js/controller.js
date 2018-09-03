'use strict';
var controller = function () {
    var startGame = function () {
            var initialNumberOfPieces = view.getInitialNumberOfPieces();

            game.startGame({
                numberOfPieces: initialNumberOfPieces
            });

            view.renderPieces(initialNumberOfPieces);
            view.showNumberOfPiecesToGuess(game.getNumberOfPiecesToGuess());
        },

        getPieces = function() {
            return game.getPieces();
        },

        makeAShot = function(id) {
            var gameState;

            gameState = game.makeAShot(id);
            view.changeColorOfPieces(id, gameState);
            if(gameState === "NEXT LEVEL") {
                view.disableAllElements();
                setTimeout(nextLevel, 3000);
            } else if (gameState === "GAME OVER") {
                view.disableAllElements();
                setTimeout(startGame, 2000);
            } else if (gameState === "DOUBLE SHOT") {
                view.disableAllElements();
                setTimeout(startGame, 2000);
            }
        },

        nextLevel = function () {
            game.getNextLevel();
            view.renderPieces();
            view.showNumberOfPiecesToGuess(game.getNumberOfPiecesToGuess());
        },

        restartLevel = function () {
            game.restartLevel();
            view.renderPieces();
        };

    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'makeAShot': makeAShot,
        'restartLevel': restartLevel

    }
}();