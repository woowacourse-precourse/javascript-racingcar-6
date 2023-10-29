function checkCarName(carNames) {
  carNames.forEach((name) => {
    if (name === "") {
      throw new Error("[ERROR] 입력하지 않은 이름이 있습니다.");
    }
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름이 5글자 초과되었습니다.");
    }
  });
}
export default checkCarName;
