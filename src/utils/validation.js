export const IsNameLengthUnderFive = (name) => {
  if (name.length > 5) throw new Error("[ERROR]이름이 올바른 형식이 아닙니다.");
};
//이름 인풋이 , 와 string으로만 이루어졌는지 검사
export const IsInputRightForm = (inputs) => {
  const regex = /^,+$/g;
  if (!regex.test(inputs))
    throw new Error("[ERROR]이름이 올바른 형식이 아닙니다.");
};
