'use strict';

var view = (function () {

    var getInitialNumberOfPieces = function () {
            return document.getElementById("initNumberOfPieces").value;
        },

        getDelayTime = function () {
            return document.getElementById("delayTime").value;
        },

        renderPieces = function () {
            var memoryGame = document.getElementById("memorygame"),
                i,
                id,
                content,
                pieces;



            clearGame();

            pieces = controller.getPieces();

            for (i = 0; i < pieces.length; i++) {
                id = "piece" + i;
                content = document.createElement("div");
                // if(pieces[i].toGuess === true) {
                //     content.setAttribute("class", "highlight");
                // }

                content.setAttribute("id", id);
                memoryGame.appendChild(content);

            }

            showPieces();
            highlightPieces(pieces);
            setTimeout(function () {
                blackOutPieces(pieces);
            }, getDelayTime());
        },

        clearGame = function () {
        var piece;
            while (document.getElementById("memorygame").hasChildNodes()) {
                piece = document.getElementById("memorygame").firstChild;
                document.getElementById("memorygame").removeChild(piece);
            }
        },

        showPieces = function() {
            var pieces = document.getElementById("memorygame").children,
                i;
            for(i = 0; i < pieces.length; i++) {
                pieces[i].setAttribute("class", "piece");
            }
        },

        blackOutPieces = function(pieces) {
            var i,
                piece;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    piece = document.getElementById("piece"+i);
                    piece.setAttribute("class", "piece");
                }
            }
        },

        highlightPieces = function (pieces) {
            var i,
                piece;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    piece = document.getElementById("piece"+i);
                    piece.setAttribute("class", "highlight");
                }
            }
        };



    return {
        'renderPieces': renderPieces,
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'highlightPieces': highlightPieces,
        'getDelayTime': getDelayTime
    }
})();