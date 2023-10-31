export default function checkValidRounds(num) {
  //Number.isInteger(num) -> String, 실수 걸러냄
  if (!Number.isInteger(num) && num <= 0) {
    throw new Error("[ERROR] 숫자(양수)를 입력해주세요.");
  }
  return true;
}
