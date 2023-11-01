const sortArray = (array) => {
  const inputArray = [...array];
  inputArray.sort((x, y) => y.currentState - x.currentState);
  return inputArray;
};

export default sortArray;
