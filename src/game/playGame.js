import initGame from "./initGame.js";
import { Console } from "@woowacourse/mission-utils";

export default async function playGame(){
    const [car_names, total_race_count] = await initGame();
    Console.print("playGame");
    Console.print(car_names);
    Console.print(total_race_count);
    return;
};