/**
 * 주어진 메세지를 이용하여 "[ERROR]"로 시작하는 메세지를 반환한다.
 * 
 * @param {string} message
 * @param {string}
 */
export default function makeErrorMessage(message) {
  const errorMessage = `[ERROR] ${message}`;

  return errorMessage;
}
