// @ts-check
import {GameController} from "./controller/GameController";
import {InputConverter} from "./view/InputConverter";
import {InputValidator} from "./view/InputValidator";
import InputView from "./view/InputView";
import OutputView from "./view/OutputView";
import {MoveDecider} from "./domain/MoveDecider.js";

class App {
    /**
     * @returns {Promise<void>}
     */
    async play() {
        const moveDecider = MoveDecider.random();
        // 클래스는 하나, 인스턴스는 만들기 나름
        const gameController = new GameController(
            new InputView(new InputValidator(), new InputConverter()),
            new OutputView(),
            moveDecider
        );
        await gameController.start();
        //static이면(static start~) 클래스명.메소드() 가능한데, GameController라는 인스턴스가 없음, static끼리만 사용 가능, static은 클래스명으로만 불러올 수 있음
    }
}

export default App;
