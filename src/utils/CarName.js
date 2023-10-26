class CarName {
  async createToRightObj(names) {
    let namesObj = {};
    names.forEach((name) => {
      if (name.length > 5) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      namesObj[name] = 0;
    });
    return namesObj;
  }
}
export default CarName;
