import getCarNames from "../input/carNames";
import getRaceCount from "../input/raceCount";

export default async function initGame(){
    // 입력 및 유효성 검사
    const car_names = await getCarNames(); 
    const car_score_list = car_names.map(name => ({ name, score: 0 }));   
    const total_race_count = await getRaceCount();

    return [car_score_list, total_race_count];
};



