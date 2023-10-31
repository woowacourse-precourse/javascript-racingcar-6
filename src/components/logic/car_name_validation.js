import { MissionUtils } from "@woowacourse/mission-utils";

const carNameMaxLen = (carName) => {
    let nameLenArray = carName.map(x => x.length);
    let maxLenName = Math.max(...nameLenArray);
    if (maxLenName > 6) {
        MissionUtils.Console.print('[ERROR] 자동차 이름을 5글자 이하로 지어주세요.');
        throw new Error("[ERROR]");
    }
};

const carNameValidation = (carName) => {
    carNameMaxLen(carName);
};

export default carNameValidation;