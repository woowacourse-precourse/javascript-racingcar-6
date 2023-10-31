import { MissionUtils } from "@woowacourse/mission-utils";

async function inputCarName() {
    let carName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으르 구분\n');
    carName = carName.split(',');
    for (let i = 0; i < carName.length; i++) {
        if (carName[i].length > 5) {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }
    }
    return carName;
}

export default inputCarName;