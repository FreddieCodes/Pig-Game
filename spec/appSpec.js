describe("Game", function() {
    beforeEach(function(){
      game = new Game()
    });

        it("should have a dice that rolls numbers between 1 & 6", function(){
            expect(game.dice >= 1 && game.dice <= 6).toBeTruthy()
        });

});