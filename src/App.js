import { MESSAGE, inputData } from "./Data.js";
import Controller from "./Controller.js";
import { Console } from "@woowacourse/mission-utils";

class App {
    async play() {
        inputData.player = await Controller.setPlayer(
            await Console.readLineAsync(MESSAGE.GET_PLAYER)
        );
        inputData.number = await Controller.setNumber(
            await Console.readLineAsync(MESSAGE.GET_NUMBER)
        );

        Console.print(MESSAGE.PROGRESS_RESULT);
        for (let i = 0; i < inputData.number; i++) {
            Controller.raceProgress(inputData.player);
            Console.print(Controller.getRaceResultText(inputData.player));
        }
        Console.print(Controller.getWinnerText(inputData.player));
    }
}

export default App;
