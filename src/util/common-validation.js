const SPACE_ERROR_MESSAGE = "[ERROR] 입력에 공백이 포함될 수 없습니다.";

/**
 * 입력받은 문자열에 공백이 존재하는지 검증하기 위한 함수
 * @param {string} inputString 문자열
 * @throw 문자열에 공백이 존재한다면 에러를 던진다.
 * @returns
 */
function checkSpace(inputString) {
  const spacePattern = /\s/g;
  if (inputString.match(spacePattern)) {
    throw new Error(SPACE_ERROR_MESSAGE);
  }

  return;
}

export default checkSpace;
