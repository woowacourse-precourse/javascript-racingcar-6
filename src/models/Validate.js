const Validate = {
  inputCar(inputValue) {
    if (inputValue === '') throw new Error('[ERROR]');

    if (!inputValue.includes(',') && inputValue.length > 5) {
      throw new Error('[ERROR]');
    }

    if (inputValue.includes(',')) {
      const nameArr = inputValue.split(',');
      const uniqueNameSet = new Set(nameArr);
      if (nameArr.length !== uniqueNameSet.size) throw new Error('[ERROR]');

      nameArr.forEach((element) => {
        if (element.length < 1 || element.length > 5) {
          throw new Error('[ERROR]');
        }
      });
    }
  },

  inputRound(inputValue) {
    const stringToNumber = Number(inputValue);
    if (Number.isNaN(stringToNumber)) throw new Error('[ERROR]');

    if (stringToNumber < 1) throw new Error('[ERROR]');
  },
};

export default Validate;
