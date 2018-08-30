'use strict';

var view = (function () {

    var getInitialNumberOfPieces = function () {
            return document.getElementById("initialNumberOfPieces").value;
        },

        renderPieces = function () {
            var memoryGame = document.getElementById("memorygame"),
                i,
                id,
                piece,
                pieces;

            clearGame();

            pieces = controller.getPieces();

            for (i = 0; i < pieces.length; i++) {
                id = "piece" + i;
                piece = document.createElement("div");
                if(pieces[i].toGuess === true) {
                    piece.setAttribute("class", "highlight");
                }

                piece.setAttribute("id", id);
                memoryGame.appendChild(piece);
            }
        },

        clearGame = function () {
            var piece;
            while (document.getElementById("memorygame").hasChildNodes()) {
                piece = document.getElementById("memorygame").firstChild;
                document.getElementById("memorygame").removeChild(piece);
            }
        },

        highlightPieces = function (pieces) {
            var i,
            piece;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    piece = document.getElementById("piece" + i);
                    piece.setAttribute("class", "highlight");
                }
            }
        };


    return {
        'renderPieces': renderPieces,
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'highlightPieces': highlightPieces
    }
})();