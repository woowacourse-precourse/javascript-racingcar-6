import { ERRORMSG } from "../../constants/message.js";
import { GMAEVALIDATION } from "../../constants/validation.js";

export const splitInputCarName = (input) => {
  const carNameList = input.split(",");
  return carNameList;
};

export const checkinputCarList = (input) => {
  if (input.length < GMAEVALIDATION.min_carlist)
    throw new Error(ERRORMSG.invalid_min_carList);
};

export const checkInputCarNameValidation = (inputs) => {
  const unique = new Set(inputs);
  if (unique.size !== inputs.length)
    throw new Error(ERRORMSG.invalid_duplicate_name);

  if (inputs.length > GMAEVALIDATION.max_carlist_length)
    throw new Error(ERRORMSG.invalid_carlist_length);
  inputs.reduce((acc, cur) => {
    if (cur.length > GMAEVALIDATION.max_carname_length)
      throw new Error(ERRORMSG.invalid_carname_length);
    if (cur.includes(" ")) throw new Error(ERRORMSG.invalid_contain_gap);
    if (cur === "") throw new Error(ERRORMSG.invalid_contain_not);
    if (GMAEVALIDATION.check_special_characters.test(cur))
      throw new Error(ERRORMSG.invalid_special_character);
    if (GMAEVALIDATION.check_korean_characters.test(cur))
      throw new Error(ERRORMSG.invalid_korean_character);
  }, 0);
};

export const checkInputTryNumValidation = (input) => {
  if (!GMAEVALIDATION.check_only_number.test(input))
    throw new Error(ERRORMSG.invalid_not_number);
  if (input.includes("0")) throw new Error(ERRORMSG.invalid_include_zero);
  if (input >= 10) throw new Error(ERRORMSG.invalid_exceed_max_try);
};
