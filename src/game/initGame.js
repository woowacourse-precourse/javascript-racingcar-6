import validCarNames from "../input/validCarNames";
import validRaceCount from "../input/validRaceCount";
import { Console } from "@woowacourse/mission-utils";

export default async function initGame(){
    const car_names = await validCarNames();
    const total_race_count = await validRaceCount();

    Console.print("initGame");
    Console.print(car_names);
    Console.print(total_race_count);
    return [car_names, total_race_count];
};



