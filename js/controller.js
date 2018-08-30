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

        nextLevel = function () {
            game.nextLevel();
            view.renderPieces(game.getPieces());
        },

        restartLevel = function () {
            game.restartLevel();
            view.renderPieces(game.getPieces());
        };

    return {
        'startGame': startGame,
        'getNumberOfPieces': getNumberOfPieces,
        'getPieces': getPieces,
        'nextLevel': nextLevel,
        'restartLevel': restartLevel

    }
}();