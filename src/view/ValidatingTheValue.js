import DataProcess from './DataProcess.js';
import ERRORMESSAGE from '../constant/ErrorMessage.js';
import ValidatingTheValueUtils from './ValidatingTheValueUtils.js';

function checkCarName(carName) {
  if (ValidatingTheValueUtils.checkStrSizeOverFive(carName.length)) {
    throw new Error(ERRORMESSAGE.ERROR + ERRORMESSAGE.OVER_FIVE);
  }
  if (ValidatingTheValueUtils.checkStrSizeIsZero(carName.length)) {
    throw new Error(ERRORMESSAGE.ERROR + ERRORMESSAGE.NOT_EXIST);
  }
  if (ValidatingTheValueUtils.checkIsCanNotPrint(carName)) {
    throw new Error(ERRORMESSAGE.ERROR + ERRORMESSAGE.NOT_DISPLAY);
  }
}
function checkCarNames(carNames) {
  const carNameList = DataProcess.divideCarName(carNames);

  carNameList.forEach((carName) => checkCarName(carName));
  if (ValidatingTheValueUtils.checkSameNameInCarList(carNameList)) {
    throw new Error(ERRORMESSAGE.ERROR + ERRORMESSAGE.SAME_NAME);
  }
  return (carNameList);
}

export default { checkCarNames };
