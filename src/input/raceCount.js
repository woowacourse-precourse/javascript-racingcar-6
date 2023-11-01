import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../output/messages.js";

export default async function getRaceCount(){
    let user_input;
    try {
        user_input = await Console.readLineAsync(MESSAGES.TOTAL_RACE_COUNT_QUESTION);
    } catch (error) {
        throw new Error(MESSAGES.INPUT_ERROR);
    }

    if (isValidRaceCount(user_input)) {
        return user_input;
    }    
};

const isValidRaceCount = (user_input) => {
    if (!/^[1-9]+$/.test(user_input)) {
        throw new Error(MESSAGES.TOTAL_RACE_COUNT_ERROR);
    }
    
    return true;
};