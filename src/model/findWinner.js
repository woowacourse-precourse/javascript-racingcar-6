const findWinner = (map) => {
  let max = -Infinity;
  const keys = [];

  for (const [key, value] of map) {
    if (value > max) {
      max = value;
      keys.length = 0;
    }

    if (value === max) {
      keys.push(key);
    }
  }

  if (keys.length > 1) {
    return `최종 우승자 : ${keys.join(", ")}`;
  }
  return `최종 우승자 : ${keys[0]}`;
};

export default findWinner;
