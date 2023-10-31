import { MissionUtils } from "@woowacourse/mission-utils";

const attemptsNumberRange = (attemptsNumber) => {
    if (attemptsNumber <= 0) {
        MissionUtils.Console.print('[ERROR] 시도 횟수를 1 이상의 자연수로 정해주세요.');
        throw new Error("[ERROR]");
    }
};

const attemptsNumberDataType = (attemptsNumber) => {
    if (attemptsNumber % 1 != 0) {
        MissionUtils.Console.print('[ERROR] 시도 횟수는 1 이상의 자연수입니다.');
        throw new Error("[ERROR]");
    }
};

const attemptsNumberValidation = (attempsNumber) => {
    attemptsNumberRange(attempsNumber);
    attemptsNumberDataType(attempsNumber);
};

export default attemptsNumberValidation;