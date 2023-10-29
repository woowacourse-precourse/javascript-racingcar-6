const ValidateExceptions = (user) => {
  if (user.length < 2) {
    throw '[ERROR] 자동차 이름은 2가지 이상 작성하여야 합니다.';
  }
  user.forEach((element) => {
    if (element.length > 5) {
      throw '[ERROR] 자동차의 이름은 5자 이하로 작성하여야 합니다.';
    }
    if (element.length === 0) {
      throw '[ERROR] 자동차의 이름은 공백이 포함될 수 없습니다.';
    }
  });
};

export default ValidateExceptions;
