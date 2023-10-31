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
export const checkTryNumber = (input) => {
  if (isNaN(input) || input[0] == 0) {
    throw new Error("[ERROR] 이동횟수 잘못된 입력");
  }
};
