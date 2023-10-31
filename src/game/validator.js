import {CAR_NAME_LENGTH, SPLIT_MARK} from "./constants.js";

const isNumeric = (value) => !isNaN(Number(value));
const hasUniqueCars = (value) => new Set(value).size === value.length;

export const carStringValidator = (str) => {
    return str.includes(SPLIT_MARK);
}

export const playCountValidator = (number) => {
    return isNumeric(number) && Number(number) > 0;
}

export const carNameValidator = (carName) => {
    return carName.length <= CAR_NAME_LENGTH && carName.length > 0;
}

export const carsListValidator = (carsList) => {
    return hasUniqueCars(carsList);
}
