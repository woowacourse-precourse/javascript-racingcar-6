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

  inputs.forEach((input) => {
    if (input.length > GMAEVALIDATION.max_carname_length)
      throw new Error(ERRORMSG.invalid_carname_length);
    if (input.includes(" ")) throw new Error(ERRORMSG.invalid_contain_gap);
    if (input === "") throw new Error(ERRORMSG.invalid_contain_not);
    if (GMAEVALIDATION.check_special_characters.test(input))
      throw new Error(ERRORMSG.invalid_special_character);
    if (GMAEVALIDATION.check_korean_characters.test(input))
      throw new Error(ERRORMSG.invalid_korean_character);
  });
};

export const checkInputTryNumValidation = (input) => {
  GMAEVALIDATION.check_only_number.lastIndex = 0;
  if (!GMAEVALIDATION.check_only_number.test(input))
    throw new Error(ERRORMSG.invalid_not_number);
  if (input <= 0) throw new Error(ERRORMSG.invalid_negative);
  if (input > GMAEVALIDATION.max_try)
    throw new Error(ERRORMSG.invalid_exceed_max_try);
};
