export function validateNumber(arg) {
  if (typeof arg !== 'number')
    throw new Error('[ERROR] 인자는 숫자여야 합니다.');
}

export function validateBetweenOneAndNine(number) {
  if (number < 0 || number > 9)
    throw new Error('[ERROR] 숫자는 1과 9사이어야 합니다.');
}

export function validateName(name) {
  if (name.length > 5) throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
  if (name.length < 1) throw new Error('[ERROR] 이름은 1자 이상이어야 합니다.');
}

export function validateNoneZeroLengthInput(str) {
  if (str.length === 0)
    throw new Error('[ERROR] 입력값은 1자 이상이어야 합니다.');
}
