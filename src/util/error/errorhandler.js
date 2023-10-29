import { consolePrint } from '../libraryFeatures/consoleHandler.js';
import errorList from './errorCode.js';

export function occuredErrorhandler(code) {
  const occuredError = errorList.get(code);

  const errorMessage = occuredError !== undefined ? occuredError : '예상치 못한 에러가 발생했습니다.';

  return Promise.reject(errorMessage);
}

export function defaultErrorHandler(error) {
  return Promise.reject(error);
}

export function appErrorHandler(error) {
  const errorMessage = `[ERROR] ${error}`;
  consolePrint(errorMessage);
  return Promise.reject(errorMessage);
}
