export function validateNames(names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i].length === 0 || names[i].length > 5) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
    }
  }
}
