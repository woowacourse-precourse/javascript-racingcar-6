import InputView from "../views/InputView"

class GameController {
    
    #outputView = OutputView;

    #inputView = InputView;
    
    constructor(distanceBoard, laps) {
        this.distanceBoard = distanceBoard;
        this.laps = laps;
    }

    async ready() {
        this.distanceBoard = Distance.setBoard(await this.#inputView.setCarNames());
        this.laps = await this.#inputView.setLaps();

        await this.#start();
    }

    async #start() {
        this.#outputView.print('실행결과');
        this.distanceBoard = this.#race.racing(this.distanceBoard, this.laps);
        this.#end();
    }
}

export default GameController;