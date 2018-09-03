'use strict';
describe('Controller', function () {
    it('should start game', function () {

        //given
        spyOn(game, 'startGame');

        spyOn(view, 'getInitialNumberOfPieces').and.returnValue(4);

        spyOn(view, 'renderPieces');

        spyOn(view, 'showNumberOfPiecesToGuess');

        spyOn(game, 'getNumberOfPiecesToGuess');

        //when
        controller.startGame();

        //then
        expect(view.renderPieces).toHaveBeenCalledWith(4);
    });

});