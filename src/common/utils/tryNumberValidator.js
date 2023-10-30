// TODO: 파라미터로 input.min & input.max 받고
const isNumeric = (input) => /^[0-9]+$/.test(input);

const isValidTryNumber = (input) => input.toString().length === 1 && isNumeric(input);

export default isValidTryNumber;
