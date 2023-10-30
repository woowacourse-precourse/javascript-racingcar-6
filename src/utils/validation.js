import { MissionUtils } from "@woowacourse/mission-utils";

const isNumber = (count) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(count);
}

const isBiggerThan5 = (name) => name.length > 5;

const isNameDuplicate = (name, cars) => cars.find((car) => car.isSameName(name)) !== undefined;

const isRandomNumberAtLeast4 = () => MissionUtils.Random.pickNumberInRange(0, 9) >= 4;

const validateName = (name, cars) => {
    if (isBiggerThan5(name)) {
        throw new Error("[ERROR] 이름이 5자를 초과했습니다.")
    }
    if (isNameDuplicate(name, cars)) {
        throw new Error("[ERROR] 중복된 이름이 존재합니다.")
    }
}

const validateCount = (count) => {
    if (!isNumber(count)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
    }
}

export {
    isNumber,
    isBiggerThan5,
    isNameDuplicate,
    isRandomNumberAtLeast4,
    validateName,
    validateCount
}