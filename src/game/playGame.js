import result from "./result.js";
import initGame from "./initGame.js";
import { MESSAGES } from "../output/messages.js";
import { Console, Random } from "@woowacourse/mission-utils";

export default async function playGame(){
    // 초기 설정
    const [car_score_list, total_race_count] = await initGame();

    // 게임 진행
    Console.print(MESSAGES.EACH_RACE_RESULT);
    for (let i = 0; i < total_race_count; i++) {
        playOneRace(car_score_list);
    }

    // 결과 출력
    const RESULT = await result(car_score_list);
    Console.print(RESULT);
};

const isRunOrStop = (car_score) => {
    const random_number = Random.pickNumberInRange(0,9);

    if (random_number >= 4) {
        return car_score + 1;
    }
};

const playOneRace = (car_score_list) => {
    // 1게임 점수 계산
    car_score_list.forEach((car) => {
        car.score = isRunOrStop(car.score);
    });

    // 진행 사항 출력
    car_score_list.forEach((car) => {
        Console.print(`${car.name} : ${MESSAGES.HYPHEN.repeat(car.score)}`);
    })
}