import { Console } from "@woowacourse/mission-utils";

const RESULT_MESSAGE = "\n실행 결과";

const OutputView = {
    print(message) {
        Console.print(message);
    },

    printResultMessage() {
        this.print(RESULT_MESSAGE);
    }
}

export default OutputView;