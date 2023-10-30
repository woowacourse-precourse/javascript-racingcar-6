const isWrongCarName = (names) => {
  const wrongCarName = names.some((name) => !(name.length > 0 && name.length <= 5));
  if (wrongCarName) throw new Error('[ERROR] 잘못된 입력입니다.');
};

const isDuplicateCarName = (names) => {
  const DuplicateCarName = new Set(names).size !== names.length;
  if (DuplicateCarName) throw new Error('[ERROR] 중복된 이름입니다.');
};

const validCarNames = (carNames) => {
  const names = carNames.split(',').map((name) => name.trim());
  isWrongCarName(names);
  isDuplicateCarName(names);

  return names;
};

export default validCarNames;
