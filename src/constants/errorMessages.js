const getErrorMessage = (message) => {
  return `[ERROR] ${message}`;
};

const getNameBlankErrorMessage = () => {
  return getErrorMessage('빈 이름입니다.');
};

const getNameLengthErrorMessage = () => {
  return getErrorMessage('이름은 5자 이하만 가능합니다.');
};

const getNotIntegerErrorMessage = () => {
  return getErrorMessage('시도할 횟수는 정수만 가능합니다.');
};

const getWhiteSpacesErrorMessage = () => {
  return getErrorMessage('이름에 공백이 있습니다.');
};

export {
  getNameBlankErrorMessage,
  getNameLengthErrorMessage,
  getNotIntegerErrorMessage,
  getWhiteSpacesErrorMessage,
};
