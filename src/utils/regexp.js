// 유효성 검사 정규표현식

export const regExpConstants = {
  regFirstForm : /^[가-힣a-zA-Z]{1}[가-힣a-zA-Z,]{1,}[가-힣a-zA-Z]{1}$/,
  regNameLen : /^[가-힣a-zA-Z]{1,5}$/,
  regLanguage : /^[가-힣]{1,}$|^[a-z]{1,}$|^[A-Z]{1,}$/

}