import { MissionUtils } from "@woowacourse/mission-utils";
import carNameValidation from "../logic/car_name_validation.js";

const carNameSplit = (input) => {
    let carArray = input.trim().split(',');
    return carArray;
};

async function carNameInput() {
    let input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    let carName = carNameSplit(input);
    carNameValidation(carName);
    return carName;
};
export default carNameInput;