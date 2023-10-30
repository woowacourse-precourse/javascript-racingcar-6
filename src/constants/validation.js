export const GMAEVALIDATION = Object.freeze({
  check_special_characters:
    /[!?@#$%^&*():;+=~{}<>[\]\-\_\[\]\|\\\"\'\,\.\/\`\₩]/,
  check_korean_characters: /[ㄱ-ㅎㅏ-ㅣ가-힣]/,
  check_only_number: /^(?!0\d)\d+$/g,
  max_carname_length: 5,
  max_carlist_length: 5,
  min_carlist: 2,
  max_try: 9,
  car_move_condition: 4,
});
