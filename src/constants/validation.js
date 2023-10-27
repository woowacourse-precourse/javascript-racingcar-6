export const GMAEVALIDATION = Object.freeze({
  check_special_characters:
    /[!?@#$%^&*():;+=~{}<>[\]\-\_\[\]\|\\\"\'\,\.\/\`\₩]/g,
  check_korean_characters: /[ㄱ-ㅎㅏ-ㅣ가-힣]/g,
  check_only_number: /[1-9]/g,
  max_carname_length: 5,
  max_carlist_length: 5,
  min_carlist: 2,
  max_try: 9,
});
