class CarErrors {
  static checkInputLength(inputList) {
    inputList.forEach((element) => {
      if (element.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
      }
    });
  }
}

export default CarErrors;
