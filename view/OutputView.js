import { Console } from "@woowacourse/mission-utils";

class OutputView {
    static getLine(distance) {
        let line = '';
        for (var i = 0; i < distance; i++) {
            line += '-';
        }
        return line;
    }

    static printCars(name, distance) {
        for (var i = 0; i < name.length; i++) {
            const line = this.getLine(distance[i]);
            Console.print(`${name[i]} : ${line}`);
        }
    }

    static printWinners(winners) {
        Console.print(`최종 우승자 : ${winners.join(", ")}`);
    }
}

export default OutputView;