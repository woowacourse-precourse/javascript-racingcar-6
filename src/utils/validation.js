export function validateNameShouldBeLessThan5(names) {
  names.forEach((name) => {
    if (name.length > 5)
      throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
  });
}

export function validateNumber(arg) {
  if (typeof arg !== 'number')
    throw new Error('[ERROR] 인자는 숫자여야 합니다.');
}
