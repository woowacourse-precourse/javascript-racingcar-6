import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../output/messages.js";

export default async function getCarNames(){
    let user_input;
    try {
        user_input = await Console.readLineAsync(MESSAGES.CAR_NAMES_QUESTION);
    } catch (error) {
        throw new Error(MESSAGES.INPUT_ERROR);
    }    
    const car_names = user_input.split(",");

    if (isValidCarName(car_names)) {
        return car_names;
    }
};

const isValidCarName = (car_names) => {
    const valid_car_names = car_names.filter((car_name) => 
        car_name.length <= 5 && 
        car_name.length >= 1 && 
        /^[a-zA-Z]*$/.test(car_name)
    );

    if (valid_car_names.length !== car_names.length) {
        throw new Error(MESSAGES.CAR_NAMES_ERROR);
    }

    return true;
};