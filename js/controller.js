'use strict';
var controller = function () {
    var startGame = function () {
            var initialNumberOfPieces = view.getInitialNumberOfPieces();

            game.startGame({
                numberOfPieces: initialNumberOfPieces
            });

            view.renderPieces(initialNumberOfPieces);
        },


        getNumberOfPieces = function() {
            return game.getNumberOfPieces();
        },

        getPieces = function() {
            return game.getPieces();
        },

        makeAShot = function(id) {
            var gameState;

            gameState = game.makeAShot(id);
            view.changeColorOfPieces(id, gameState);
            if(gameState === "NEXT LEVEL") {
                setTimeout(nextLevel, 4000);
            } else if (gameState === "GAME OVER") {
                setTimeout(startGame, 4000);
            }
        },

        nextLevel = function () {
            game.getNextLevel();
            view.renderPieces();
        },

        restartLevel = function () {
            game.restartLevel();
            view.renderPieces();
        };

    return {
        'startGame': startGame,
        'getNumberOfPieces': getNumberOfPieces,
        'getPieces': getPieces,
        'makeAShot': makeAShot,
        'nextLevel': nextLevel,
        'restartLevel': restartLevel

    }
}();