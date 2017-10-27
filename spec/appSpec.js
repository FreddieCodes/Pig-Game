describe("Game", function() {
    beforeEach(function(){
      game = new Game()
    });
       
        it("should have 2 players, whose scores start at 0", function(){
            expect(game.scores).toEqual([0,0]);
        });

        it("should have a dice that rolls numbers between 1 & 6", function(){
            expect(game.dice >= 1 && game.dice <= 6).toBeTruthy();
        });


});