import { Console } from "@woowacourse/mission-utils";

const RESULT_MESSAGE = '\n실행 결과';
const END_OF_ROUND_MESSAGE = '';

const OutputView = {

    print(message) {
        Console.print(message);
    },

    printResultMessage() {
        this.print(RESULT_MESSAGE);
    },

    printEndOfRound() {
        this.print(END_OF_ROUND_MESSAGE);
    }
}

export default OutputView;