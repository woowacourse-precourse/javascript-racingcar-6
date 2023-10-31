import ErrorMessage from '../errors/ErrorMessage.js';
import { SETTING_NUMBERS } from '../constants/constants.js';


function checkBlankInput(carName) {
  if (carName === '') {
    throw new ErrorMessage('자동차 이름에 공백을 입력했습니다.');
  }
}

function checkOverLength(carName) {
  if (carName.length > SETTING_NUMBERS.maxCarNameLength) {
    throw new ErrorMessage(`자동차 이름의 길이는 ${SETTING_NUMBERS.maxCarNameLength} 이하만 가능합니다.`);
  }
}

function checkDuplication(carNames) {
  const carNamesSet = new Set(carNames);

  if (carNames.length !== carNamesSet.size) {
    throw new ErrorMessage('자동차 이름이 중복되어서는 안 됩니다.');
  }
}

/**
 * 입력 받은 문자열을 검증하여, 문제가 있을 경우 에러를 발생시킨다.
 * 1. 스페이스 등의 공백이 있을 경우 제거하여 판단한다.
 * 2. 이름이 1글자 이상, 5글자 이하인지 구분한다.
 * 3. 아무것도 입력되지 않았거나, 이름이 공백인지 구분한다.
 * 
 * @param {Promise<string>} carNamesInput
 * @throws 사용자가 잘못된 값을 입력했을 경우 throw Error
 */
export default function validateCarNames(carNamesInput) {
  const carNamesWithoutSpace = String(carNamesInput).replace(/(\s*)/g, '');
  const carNames = carNamesWithoutSpace.split(",");

  checkDuplication(carNames);

  for (const carName of carNames) {
    checkBlankInput(carName);
    checkOverLength(carName);
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