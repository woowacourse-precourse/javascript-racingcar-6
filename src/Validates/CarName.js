import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../message.js";

const carName = await Console.readLineAsync(MESSAGE.RACING_CAR_NAME);
const carNameArray = carName.split(',');
const REGEX = /[`~!@#$%^&*()_|+\-=?;:'".<>\{\}\[\]\\\/ ]/gim;

const lengthError = carNameArray.map(function (value, index) {
  if (carNameArray[index].length > 5 || carNameArray.length <= 1) {
    throw new Error(MESSAGE.ERROR);
  }
  return true;
})
const regexError = function () {
  if (carName.includes(',') !== true && REGEX.test(carName) !== true) {
    throw new Error(MESSAGE.ERROR)}; 
}

export { carName, carNameArray, lengthError, regexError };