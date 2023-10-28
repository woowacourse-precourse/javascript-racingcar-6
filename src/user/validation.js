import { CheckNameLength, isNotNumber } from "../constant/inputMessage";

export function isValidName(names) {
    for (const carName of names) {
        if (carName.length > 5) {
            throw new Error(CheckNameLength);
        }
    }
}

export function isValidTryCount(count) {
    if (isNaN(Number(count))) { // 숫자가 아닐 경우
        throw new Error(isNotNumber);
    }
}