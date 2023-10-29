import { consolePrint } from '../libraryFeatures/consoleHandler.js';
import errorList from './errorCode.js';

export function gameErrorhandler(code) {
  const occuredError = errorList.get(code);

  const errorMessage = occuredError !== undefined ? occuredError : '예상치 못한 에러가 발생했습니다.';

  consolePrint(`[ERROR] ${errorMessage}`);
  return Promise.reject(errorMessage);
}

export function defaultErrorHandler(error) {
  consolePrint(`[ERROR] ${error}`);
  return Promise.reject(error);
}
