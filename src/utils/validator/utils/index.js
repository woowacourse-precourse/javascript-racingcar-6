const ValidatorUtil = {
  isDelimiter(input) {
    const DELIMITER = ',';
    const Reg = new RegExp(DELIMITER, 'g');
    const result = input.match(Reg)?.length;

    return Boolean(result);
  },
};

export default ValidatorUtil;
