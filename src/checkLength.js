function checkLength(inputArray) {
  if (inputArray.length > 5) {
    throw new Error("[ERROR] 5자 이상의 이름을 입력했습니다.");
  }
}
