export const REGEX = {
  // 영어로 된 이름인지 체크
  isEnglish: /^[a-zA-Z,0-9]+$/,

  // 두 이름 이상인지 체크
  overTwoNames: /^[\w]+(,[\w]+){1,}$/,

  // 중복 체크
  duplicated: /^(?!.*\b(\w+)\b.*,\s*\b\1\b).*$/i,

  // 길이가 6글자를 초과하는지 체크
  under5: /^[\w]{1,5}(,[\w]{1,5})*$/,

  // 숫자인지 체크
  isNumber: /^[0-9]+$/,

  // 0이 아닌지 체크
  notZero: /^[1-9][0-9]*$/
};
