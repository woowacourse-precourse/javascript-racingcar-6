import {
    Console,
} from "@woowacourse/mission-utils"

function printWinner(cars) {
    cars.findWinner();
    Console.print(`최종 우승자 : ${cars.getWinnerString()}`);
}

export default printWinner;