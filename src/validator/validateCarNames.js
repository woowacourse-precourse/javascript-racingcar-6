import ErrorMessage from '../errors/ErrorMessage.js';
import { SETTING_NUMBERS, ERROR_MESSAGES } from '../constants/constants.js';



function checkBlankInput(carName) {
  if (carName === '') {
    throw new ErrorMessage(ERROR_MESSAGES.blankInput);
  }
}

function checkOverLength(carName) {
  if (carName.length > SETTING_NUMBERS.maxCarNameLength) {
    throw new ErrorMessage(ERROR_MESSAGES.overLength);
  }
}

function checkDuplication(carNames) {
  const carNamesSet = new Set(carNames);

  if (carNames.length !== carNamesSet.size) {
    throw new ErrorMessage(ERROR_MESSAGES.duplication);
  }
}

/**
 * 입력 받은 문자열을 검증하여, 문제가 있을 경우 에러를 발생시킨다.
 * 1. 중복된 이름이 있는지 확인한다.
 * 2. 이름이 1글자 이상, 5글자 이하인지 확인한다.
 * 3. 아무것도 입력되지 않았거나, 이름이 공백인지 확인한다.
 * 
 * @param {list} carNames
 * @throws 사용자가 잘못된 값을 입력했을 경우 throw Error
 */
export default function validateCarNames(carNames) {
  checkDuplication(carNames);

  for (const carName of carNames) {
    checkOverLength(carName);
    checkBlankInput(carName);
  }


  // console.log(carNamesWithoutSpace);
  // console.log(carNames);
  // console.log(checkEmptyCarName(carNames));
  // console.log('\n');
}

// validateCarNames("hello,gaemm,solo");
// validateCarNames("hello ,gaemm,solo");
// validateCarNames("hello ,solo,solo");

// validateCarNames("123456");
// validateCarNames("hello,,gaemmsolo");
// validateCarNames(" ");