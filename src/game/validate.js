export const validateNameList = (nameList) => {
  const name_list = nameList.split(',');
  name_list.forEach((n) => {
    if (n.length > 5) throw new Error('[ERROR] 이름은 5자 이내로 입력해야 합니다.');
  });
};
