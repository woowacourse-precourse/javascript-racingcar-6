const ValidatorUtil = {
  isDelimiter(input) {
    const DELIMITER = ',';
    const Reg = new RegExp(DELIMITER, 'g');
    const length = input.split(DELIMITER).length - 1;
    const result = input.match(Reg)?.length;

    return length === result;
  },
};

export default ValidatorUtil;
