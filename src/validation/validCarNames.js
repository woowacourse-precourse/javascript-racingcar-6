import ERROR_MESSAGE, { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from '../constants/constants';

const isWrongCarName = (names) => {
  const wrongCarName = names.some(
    (name) => !(name.length > MIN_NAME_LENGTH && name.length <= MAX_NAME_LENGTH),
  );
  if (wrongCarName) throw new Error(ERROR_MESSAGE.wrongInput);
};

const isDuplicateCarName = (names) => {
  const DuplicateCarName = new Set(names).size !== names.length;
  if (DuplicateCarName) throw new Error(ERROR_MESSAGE.repeatCarName);
};

const validCarNames = (carNames) => {
  const names = carNames.split(',').map((name) => name.trim());
  isWrongCarName(names);
  isDuplicateCarName(names);

  return names;
};

export default validCarNames;
