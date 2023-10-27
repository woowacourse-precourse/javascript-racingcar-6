const validateNames = (humanInputName) => {
  const nameArray = humanInputName.split(',');

  const trimmedNameArray = nameArray.map((name) => {
    const trimmedName = name.trim();

    if (trimmedName.length === 0) {
      throw new Error('[ERROR] 공백을 제외하고 이름을 입력해주세요.');
    }

    if (trimmedName.length > 5) {
      throw new Error('[ERROR] 5자리 이하 이름만 입력해 주세요');
    }

    return trimmedName;
  })


  return trimmedNameArray;
}

module.exports = { validateNames };