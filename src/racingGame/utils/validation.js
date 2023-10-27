import { ERRORMSG } from "../../constants/message.js";
import { GMAEVALIDATION } from "../../constants/validation.js";
export const splitInputCarName = (input) => {
  const carNameList = input.split(",");
  return carNameList;
};

export const checkInputCarNameValidation = (inputs) => {
  if (inputs.length > GMAEVALIDATION.max_carlist_length)
    throw new Error(ERRORMSG.invalid_carlist_length);
  inputs.reduce((acc, cur) => {
    console.log(cur);

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
