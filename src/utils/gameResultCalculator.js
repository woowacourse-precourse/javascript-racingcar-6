export const calculateLongLen = (strArr) => {
  const lenArr = strArr.map(str => str.length);
  return Math.max(...lenArr);
}

export const findSameLenPlayer = (strArr, players, len) => {
  const result = [];
  strArr.forEach((str, idx)=> {
    if(str.length === len) result.push(players[idx]);
  })
  return result;
}