import InputView from "../views/InputView"

class GameController {
    
    #outputView = OutputView;

    #inputView = InputView;
    
    constructor(scoreBoard, laps) {
        this.result = scoreBoard;
        this.laps = laps;
    }

    async ready() {
        this.result = Result.setBoard(await this.#inputView.setCarNames());
        this.laps = await this.#inputView.setLaps();

        await this.#start();
    }

    async #start() {
        this.#outputView.print('실행결과');
        this.result = this.#race.racing(this.result, this.laps);
        this.#end();
    }
}

export default GameController;