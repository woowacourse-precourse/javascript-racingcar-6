const isNumber = (count) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(count);
}

const isLongerThan5 = (name) => name.length > 5;

const isNameDuplicate = (name, cars) => cars.find((car) => car.isSameName(name)) !== undefined;

const isNumberAtLeast4 = (number) => number >= 4;

const validateName = (name, cars) => {
    if (isLongerThan5(name)) {
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
    isLongerThan5,
    isNameDuplicate,
    isNumberAtLeast4,
    validateName,
    validateCount
}