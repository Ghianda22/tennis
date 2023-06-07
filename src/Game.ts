export default class Game {
    #_score: string = "love";
    #_player0: Player;


    get score(): string {
        return this.#_score;
    }
}