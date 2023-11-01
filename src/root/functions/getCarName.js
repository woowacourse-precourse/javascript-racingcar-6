import {
    Console,
} from "@woowacourse/mission-utils";

async function getCarName(){
    
    const userInput = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`);

    let carNameArray = []

    carNameArray = userInput.toString().split(",").map(isNameValid);

    return carNameArray;

}

function isNameValid(name) {
    if (name.length > 5 || name.length === 0) {
        throw new Error(`[ERROR] 각 자동차의 이름은 0 ~ 5자 사이로 입력해야 합니다.`);
    }
    return name;
}

export default getCarName;