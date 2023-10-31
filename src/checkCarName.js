function checkCarName(carNames) {
  checkNameForm(carNames);
  checkDuplicate(carNames);
}
function checkNameForm(carNames) {
  carNames.forEach((name) => {
    if (name === "") {
      throw new Error("[ERROR] 입력하지 않은 이름이 있습니다.");
    }
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름이 5글자 초과되었습니다.");
    }
  });
}
function checkDuplicate(carNames) {
  const carNamesSet = new Set(carNames);
  if (carNames.length !== carNamesSet.size) {
    throw new Error("[ERROR] 중복된 이름이 존재합니다.");
  }
}
export default checkCarName;
