import {
    Console,
} from "@woowacourse/mission-utils";

async function getCarName(){
    
    const userInput = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`);

    return userInput;
}

export default getCarName;