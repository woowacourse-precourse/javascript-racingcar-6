const isValidAttempNumber = (string) => {
  const numberExpression = /^[0-9]+$/;
  const isNumber = numberExpression.test(string);

  return isNumber;
};

export default isValidAttempNumber;
