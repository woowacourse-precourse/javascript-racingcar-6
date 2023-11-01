/**
 * 자동차 이름이 유효한지 확인하는 함수
 * @param {string} carNames 
 */
export const isValidCarNames = (carNames) => {
    if (typeof carNames !== 'string') {
        throw new Error('[ERROR] ');
    }

    const cars = carNames.split(',');

    if (cars.some(c => c.length > 5)) {
        throw new Error("[ERROR] 이름이 5글자 넘는게 있음");
    }
    if (cars.some(c => c.includes(" "))) {
        throw new Error("[ERROR] 이름에 공백이 있음");
    }
    if (cars.length == 0) {
        throw new Error("[ERROR] 입력된 차량이 없음");
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
        throw new Error("[ERROR] 숫자가 0보다 작음");
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