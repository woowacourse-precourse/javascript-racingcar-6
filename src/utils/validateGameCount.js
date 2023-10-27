const validateGameCount = (count) => {
  let regex = /^[1-9]\d*$|^1$/;
  return regex.test(count);
};

export default validateGameCount;
