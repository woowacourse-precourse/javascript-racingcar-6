import { MissionUtils } from "@woowacourse/mission-utils";

const getCarNames = async() => {
    let name = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    return name;
};

export default getCarNames;