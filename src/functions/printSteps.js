import {
    Console,
} from "@woowacourse/mission-utils";

function printSteps(cars, attemptsNumber){

    Console.print(`\n실행 결과\n`);
    
    for (var i = 0; i < attemptsNumber; i++) {
        cars.moveAllCars();

        cars.printEachStep();

        Console.print(``);

    }
}

export default printSteps;