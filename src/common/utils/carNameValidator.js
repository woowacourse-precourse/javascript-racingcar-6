const isUniqueCarName = (input) => {
  const names = input.split(',').map(name => name.trim());
  return names.length === new Set(names).size;
};

// TODO: 파라미터로 input.min & input.max 받고
const isValidCarName = (input) => {
  const carNames = input.split(',').map(name => name.trim().toUpperCase());

  return (
    carNames.length > 1 &&
    carNames.every(name => name.length <= 5) &&
    !carNames.includes('') &&
    isUniqueCarName(carNames.join(','))
  );
};

export default isValidCarName;
