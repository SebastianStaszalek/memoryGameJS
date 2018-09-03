describe('Game', function () {
    it('should have 4 pieces after game start', function () {
        var pieces;

        game.startGame();

        pieces = game.getPieces();

        expect(pieces.length).toBe(4);
    });

    it('one pieces should be to guess after game start', function () {
        var piecesToGuess;
        game.startGame();

        piecesToGuess = findPiecesToGuess(game.getPieces());

        expect(piecesToGuess.length).toBe(1);
    });

    it('two pieces should be to guess when number of pieces is 6', function () {
        var piecesToGuess,
            config = {
                numberOfPieces: 6
            };
        game.startGame(config);

        piecesToGuess = findPiecesToGuess(game.getPieces());

        expect(piecesToGuess.length).toBe(2);
    });

    it('three pieces should be to guess when number of pieces is 8', function () {
        var piecesToGuess,
            config = {
                numberOfPieces: 8
            };
        game.startGame(config);

        piecesToGuess = findPiecesToGuess(game.getPieces());

        expect(piecesToGuess.length).toBe(3);
    });

    it('six pieces should be to guess when number of pieces is 15', function () {
        var piecesToGuess,
            config = {
                numberOfPieces: 15
            };
        game.startGame(config);

        piecesToGuess = findPiecesToGuess(game.getPieces());

        expect(piecesToGuess.length).toBe(6);
    });

    it('should start game with configured number of pieces', function () {
        var pieces,
            config = {
                numberOfPieces: 6
            };
        game.startGame(config);

        pieces = game.getPieces();

        expect(pieces.length).toBe(6);
    });

    it('should start next level with proper number of pieces', function () {
        var pieces;

        game.startGame();
        game.getNextLevel();

        pieces = game.getPieces();

        expect(pieces.length).toBe(5);
    });

    it('should start next level with proper number of pieces when given config', function () {
        var pieces,
            piecesToGuess,
            config = {
                numberOfPieces: 9
            };

        game.startGame(config);
        game.getNextLevel();

        pieces = game.getPieces();
        piecesToGuess = findPiecesToGuess(pieces);

        expect(piecesToGuess.length).toBe(4);
        expect(pieces.length).toBe(10);
    });

    it('when restart level, number of all pieces and pieces to guess should be the same', function () {
        var pieces,
            piecesToGuess,
            config = {
                numberOfPieces: 7
            };

        game.startGame(config);
        game.restartLevel();

        pieces = game.getPieces();
        piecesToGuess = findPiecesToGuess(pieces);

        expect(piecesToGuess.length).toBe(2);
        expect(pieces.length).toBe(7);
    });

    it('should return HIT when shooting right piece', function () {
        var i,
            pieces,
            resultOfShoot,
            config = {
                numberOfPieces: 8,
            };

        game.startGame(config);
        pieces = game.getPieces();

        for(i=0; i<pieces.length; i++) {
            if(pieces[i].toGuess === true) {
                resultOfShoot = game.makeAShot(i);
                break;
            }
        }

        expect(resultOfShoot).toBe("HIT");
    });

    it('should return DOUBLE SHOT when shooting 2 times the same piece', function () {
        var i,
            pieces,
            resultOfShoot,
            config = {
                numberOfPieces: 8,
            };

        game.startGame(config);
        pieces = game.getPieces();

        for(i=0; i<pieces.length; i++) {
            if(pieces[i].toGuess === true) {
                game.makeAShot(i);
                resultOfShoot = game.makeAShot(i);
                break;
            }
        }

        expect(resultOfShoot).toBe("DOUBLE SHOT");
    });

    it('should return GAME OVER when shooting wrong piece', function () {
        var i,
            pieces,
            resultOfShoot,
            config = {
                numberOfPieces: 8,
            };

        game.startGame(config);
        pieces = game.getPieces();

        for(i=0; i<pieces.length; i++) {
            if(pieces[i].toGuess === false) {
                resultOfShoot = game.makeAShot(i);
                break;
            }
        }

        expect(resultOfShoot).toBe("GAME OVER");
    });

    it('should return NEXT LEVEL when shooting all pieces to guess', function () {
        var i,
            pieces,
            resultOfShoot,
            config = {
                numberOfPieces: 8,
            };

        game.startGame(config);
        pieces = game.getPieces();

        for(i=0; i<pieces.length; i++) {
            if(pieces[i].toGuess === true) {
                resultOfShoot = game.makeAShot(i);
            }
        }

        expect(resultOfShoot).toBe("NEXT LEVEL");
    });


    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;
        });
    }
});