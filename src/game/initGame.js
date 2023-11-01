import validCarNames from "../input/validCarNames";
import validRaceCount from "../input/validRaceCount";

export default async function initGame(){
    const car_names = await validCarNames(); 
    const car_score_list = car_names.map(name => ({ name, score: 0 }));   
    const total_race_count = await validRaceCount();

    return [car_score_list, total_race_count];
};



