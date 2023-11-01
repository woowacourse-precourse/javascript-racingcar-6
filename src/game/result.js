import { MESSAGES } from "../output/messages";

export default async function result(car_score_list){
    const top_score = findTopScore(car_score_list);
    const winners = findWinners(car_score_list, top_score);

    return MESSAGES.FINAL_RESULT + winners;
};

const findTopScore = (car_score_list) => {
    let top_score = -1;

    car_score_list.forEach((car) => {
        if (car.score > top_score) {
            top_score = car.score;
        }
    });
    
    return top_score;
};

const findWinners = (car_score_list, top_score) => {
    const winner_list = car_score_list.filter((car) => car.score === top_score);
    const winner_str = winner_list.map((winner) => winner.name).join(", ");

    return winner_str;
};