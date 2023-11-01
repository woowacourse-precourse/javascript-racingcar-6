import result from "./result.js";
import initGame from "./initGame.js";
import { MESSAGES } from "../output/messages.js";
import { Console, Random } from "@woowacourse/mission-utils";

export default async function playGame(){
    const [car_score_list, total_race_count] = await initGame();

    Console.print(MESSAGES.EACH_RACE_RESULT);

    for (let i = 0; i < total_race_count; i++) {
        playOneRace(car_score_list);
    }

    return car_score_list;
};

const isRunOrStop = (car_score) => {
    const random_number = Random.pickNumberInRange(0,9);

    if (random_number >= 4) {
        return car_score + 1;
    }
};

const playOneRace = (car_score_list) => {
    car_score_list.forEach((car) => {
        car.score = isRunOrStop(car.score);
    });

    car_score_list.forEach((car) => {
        Console.print(`${car.name} : ` +  "-".repeat(car.score));
    })
}