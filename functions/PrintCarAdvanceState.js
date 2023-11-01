import { Console } from "@woowacourse/mission-utils";

function printCarAdvanceState(carName, carAdvanceState) {
    for(let index in carName) {
        Console.print(carName[index]+' : '+'-'.repeat(carAdvanceState[index]));
    }
    Console.print('');
}

export default printCarAdvanceState;