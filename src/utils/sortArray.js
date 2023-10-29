const sortArray = (array) => {
  const input_array = [...array];
  input_array.sort((x, y) => y.currentState - x.currentState);
  return input_array;
};

export default sortArray;
