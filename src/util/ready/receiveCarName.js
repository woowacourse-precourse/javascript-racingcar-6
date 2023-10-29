import { checkCarNameValid } from './checkInputValid.js';
import { consoleInput } from '../libraryFeatures/MissionUtilsHandler.js';
import { defaultErrorHandler } from '../error/errorhandler.js';

async function receiveCarName() {
  try {
    const input = await consoleInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carList = await checkCarNameValid(input);
    return carList;
  } catch (error) {
    const ERROR = defaultErrorHandler(error);
    return ERROR;
  }
}

export default receiveCarName;
