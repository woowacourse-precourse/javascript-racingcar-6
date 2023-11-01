import {
    Console,
} from "@woowacourse/mission-utils";

async function getAttemptsNumber(){

    const userInput =  Number(await Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`));

    return userInput;
}

export default getAttemptsNumber;