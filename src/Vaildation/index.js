import { ERROR } from "../Constants/error.js";
export default function ValidateCheck() {
  const validateCarNameLength = (cars, i) => {
    if (cars[i].length > 5) throw new Error(ERROR.LENGTH);
  };

  const validateCarNameInput = (cars, i) => {
    const regex = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    if (regex.test(cars[i])) throw new Error(ERROR.INPUT);
  };

  // const validateNoWhiteSpace = (input) => {

  // }

  return { validateCarNameLength, validateCarNameInput };
}
