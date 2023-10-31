import {
    Console,
} from "@woowacourse/mission-utils";

async function getAttemptsNumber(){

    const userInput =  Number(await Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`));

    isNumberValid(userInput);

    return userInput;
}

function isNumberValid(userInput) {

    if(Number.isNaN(userInput)){
        throw new Error(`[ERROR] 시도 횟수는 숫자 형식이어야 합니다.`);
    }

    if(!Number.isInteger(userInput)){
        throw new Error(`[ERROR] 시도 횟수는 정수형이어야 합니다.`);
    }

    if (userInput < 0 || userInput > Number.MAX_SAFE_INTEGER) {
        throw new Error(`[ERROR] 0 ~ ${Number.MAX_SAFE_INTEGER} 사이의 수를 입력해주세요.`);
    }
}

export default getAttemptsNumber;