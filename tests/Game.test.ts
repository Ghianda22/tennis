/** TEST LIST
 *  [-] Given a game with at least three points scored by each player, when the scores ar equal the game score should be "deuce"
 *  [-] Given a game in deuce, when a player win a point the game score should be "advantage" for that player
 *  [-] Given a game score of "advantage", if the player with advantage wins the next point they should win the game
 *  [-] Given a game score of "advantage", if the player without advantage wins the next point, game score should be back at "deuce"
 *  [-] Given a player with a score of 40, if they win the next point and have a lead of at least two points, they should win the game
 *  [-]
 *  [-]
 * */

import Game from "../src/Game";

test('Given a game with at least three points scored by each player, when the scores ar equal the game score should be "deuce"', () => {
    //given
    const expectedGameScore: string  = "deuce";
    const game: Game = new Game();

    //when
    const actualGameScore:string = game.score;

    //then
    expect(actualGameScore).toEqual(expectedGameScore);
})