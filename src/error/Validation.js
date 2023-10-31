export const checkCarNameOver = (input) => {
  const name_arr = input.split(",");
  const exist_overlength = name_arr.some((name) => name.length > 5);
  if (exist_overlength) {
    throw new Error("[ERROR] 자동차 이름 길이 초과");
  }
};
export const checkCarNameWrong = (input) => {
  const name_arr = input.split(",");
  const exist_wrong_name = name_arr.some((name) => !/^[a-zA-Z]+$/.test(name));
  if (exist_wrong_name) {
    throw new Error("[ERROR] 자동차 이름 잘못된 입력");
  }
};
export const checkCarNameSame = (input) => {
  const name_arr = input.split(",");
  const uniqueNames = new Set(name_arr);
  if (name_arr.length !== uniqueNames.size) {
    throw new Error("[ERROR] 자동차 이름 중복 입력");
  }
};
export const checkTryNumber = (input) => {
  if (isNaN(input)) {
    throw new Error("[ERROR] 이동횟수가 숫자가 아닙니다");
  }
};
