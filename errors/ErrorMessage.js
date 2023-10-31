/**
 * 주어진 메세지를 이용하여 "[ERROR]"로 시작하는 메세지를 발생시킨다.
 * 
 * @class
 * @constructor
 * @param {string} errorMessage
 */
class ErrorMessage extends Error {
  constructor(errorMessage) {
    super(`[ERROR] ${errorMessage}`);
    this.name = this.constructor.name;
  } 
}

export default ErrorMessage;