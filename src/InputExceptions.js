function NamesException(carNames) {
    if (carNames.split(',').length < 2) throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.');
    if (carNames.split(',').some((name) => name.length > 5)) throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.');

    return carNames.split(',');
}

function AttemptsException(attempt) {
    if (attempt < 1) throw new Error('[ERROR] 시도할 횟수가 잘못된 형식입니다.');
    if (isNaN(attempt)) throw new Error('[ERROR] 시도할 횟수가 잘못된 형식입니다.');

    return Number(attempt);
}

export { NamesException, AttemptsException };