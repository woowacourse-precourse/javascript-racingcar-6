import { CHECK_NAME_LENGTH, IS_NOT_NUMBER } from "../constant/errorMessage";

/**
 * @param {string[]} names 자동차 이름이 들어가있는 String 배열
 * @throws String 배열 names 안에 있는 값 중 5자가 넘을 경우 에러 메시지
 */
export function isValidName(names) {
    for (const carName of names) {
        if (carName.length > 5) {
            throw new Error(CHECK_NAME_LENGTH);
        }
    }
}

/**
 * @param {number} count 게임 시도 횟수 값
 * @throws 게임 시도 횟수 값이 숫자가 아닐 경우 에러 메시지
 */
export function isValidTryCount(count) {
    if (isNaN(Number(count))) { // 숫자가 아닐 경우
        throw new Error(IS_NOT_NUMBER);
    }
}