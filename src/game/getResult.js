function getResult(cars, moveCount) {
  const MAX = Math.max(...moveCount);
  const RESULT = [];
  for (let i = 0; i < moveCount.length; i += 1) {
    if (MAX === moveCount[i]) RESULT.push(cars[i]);
  }
  return RESULT.join(', ');
}

export default getResult;
