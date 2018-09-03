'use strict';

var view = (function () {

    var getInitialNumberOfPieces = function () {
            return document.getElementById("initialNumberOfPieces").value;
        },

        getDelayTime = function () {
            return document.getElementById("delayTime").value;
        },

        showNumberOfPiecesToGuess = function (numberOfPieces) {
            document.getElementById('numberOfPiecesToGuess').textContent = numberOfPieces.toString();
        },


        renderPieces = function () {
            var memoryGame = document.getElementById("pieces"),
                i,
                id,
                board,
                pieces;

            clearGame();
            pieces = controller.getPieces();

            for (i = 0; i < pieces.length; i++) {
                id = "p"+i;
                board = document.createElement("div");

                board.setAttribute("id", id);
                board.setAttribute("onclick", "controller.makeAShot("+i+")");
                memoryGame.appendChild(board);
            }

            showPieces();
            disableAllElements();
            highlightPieces(pieces);

            setTimeout(function () {
                blackOutPieces(pieces);
                activateAllElements();
            }, getDelayTime());

        },

        clearGame = function () {
        var piece;
            while (document.getElementById("pieces").hasChildNodes()) {
                piece = document.getElementById("pieces").firstChild;
                document.getElementById("pieces").removeChild(piece);
            }
        },

        showPieces = function() {
            var pieces = document.getElementById("pieces").children,
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
                    piece = document.getElementById("p"+i);
                    piece.setAttribute("class", "piece");
                }
            }
        },

        highlightPieces = function (pieces) {
            var i,
                piece;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    piece = document.getElementById("p"+i);
                    piece.setAttribute("class", "highlight");
                }
            }
        },

        disableAllElements = function(){
            document.getElementById('pieces').classList.add('disabled');
            document.getElementById('panel').classList.add('disabled');
        },

        activateAllElements = function(){
            document.getElementById('pieces').classList.remove('disabled');
            document.getElementById('panel').classList.remove('disabled');
        },

        changeColorOfPieces = function (id, gameState) {
            var piece = document.getElementById("p" + id);
            if(gameState === "HIT") {
                piece.setAttribute("class", "hit");
            } else if (gameState === "NEXT LEVEL") {
                piece.setAttribute("class", "hit");
            } else if (gameState === "MISSED") {
                piece.setAttribute("class", "missed");
            } else if (gameState === "DOUBLE SHOT") {
                piece.setAttribute("class", "missed");
            } else if (gameState === "GAME OVER") {
                piece.setAttribute("class", "missed");
            }
        };


    return {
        'renderPieces': renderPieces,
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'showNumberOfPiecesToGuess': showNumberOfPiecesToGuess,
        'highlightPieces': highlightPieces,
        'getDelayTime': getDelayTime,
        'changeColorOfPieces': changeColorOfPieces,
        'disableAllElements': disableAllElements
    }
})();