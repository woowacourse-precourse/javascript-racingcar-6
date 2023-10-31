import { consolePrint } from '../libraryFeatures/MissionUtilsHandler.js';
import errorList from './errorCode.js';

export function occuredErrorhandler(code) {
  const occuredError = errorList.get(code);
  const UNOCCURED_ERROR = '예상치 못한 에러가 발생했습니다.';

  const errorMessage = occuredError !== undefined ? occuredError : UNOCCURED_ERROR;

  throw errorMessage;
}

export function defaultErrorHandler(error) {
  throw error;
}

export function appErrorHandler(error) {
  const errorMessage = `[ERROR] ${error}`;
  consolePrint(errorMessage);
  const ERROR = new Error(errorMessage);

  throw ERROR;
}
