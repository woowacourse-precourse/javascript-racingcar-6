const validateNames = (humanInputName) => {
  const nameArray = humanInputName.split(',');

  const trimmedNameArray = nameArray.map((name) => {
    const trimmedName = name.trim();

    if (trimmedName.length === 0) throw new Error('[ERROR] 공백을 제외하고 이름을 입력해주세요.');
    if (trimmedName.length > 5) throw new Error('[ERROR] 5자리 이하 이름만 입력해 주세요');

    return trimmedName;
  })

  return trimmedNameArray;
}

const validateParseNumber = (racingTrackInput) => {
  const trimmedRacingTrackInput = racingTrackInput.trim();
  const parsedNumber = parseInt(trimmedRacingTrackInput, 10);

  if (trimmedRacingTrackInput === '') throw new Error('[ERROR] 숫자를 입력해 주세요.');
  if (Number.isNaN(Number(trimmedRacingTrackInput))) throw new Error('[ERROR] 숫자만 입력해 주세요.');
  if (parsedNumber.toString() !== trimmedRacingTrackInput) throw new Error('[ERROR] 10진수를 입력해주세요.');

  return parseInt(racingTrackInput, 10);
}


module.exports = { validateNames, validateParseNumber };