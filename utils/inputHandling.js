export const seperateCarNames = (carNameString) => {
  const result = carNameString.split(',');
  result.forEach((carName) => {
    if (carName.length > 5) {
      console.log('wowowow');
      throw Error(
        '[ERROR] 자동차 이름은 5자 이하, 각 이름은 쉼표(,)로 구분해주세요.',
      );
    }
  });
  return result;
};
