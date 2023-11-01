/**
 * 자동차 이름이 유효한지 확인하는 함수
 * @param {string} carNames 
 */
export const isValidCarNames = (carNames) => {
    if (typeof carNames !== 'string') {
        throw new Error('[ERROR] 입력값이 string이 아닙니다.');
    }

    const cars = carNames.split(',');

    if (cars.some(c => c.length > 5)) {
        throw new Error("[ERROR] 자동차 이름이 5글자를 초과합니다.");
    }
    if (cars.some(c => c.includes(" "))) {
        throw new Error("[ERROR] 자동차 이름에 공백이 있습니다.");
    }
    if (cars.length == 0) {
        throw new Error("[ERROR] 입력된 자동차가 없습니다.");
    }
}

/**
 * 이동횟수가 유효한지 확인하는 함수
 * @param {*} attempts 
 */
export const isValidAttempts = (attempts) => {
    if (isNaN(attempts)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (attempts < 0) {
        throw new Error("[ERROR] 숫자가 0보다 작습니다.");
    }
}

/**
 * 자동차 이름, 이동횟수가 유효한지 확인하는 함수
 * @param {*} carNames 
 * @param {*} attempts 
 */
export const isValidInputs = (carNames, attempts) => {
    isValidCarNames(carNames);
    isValidAttempts(attempts);
}