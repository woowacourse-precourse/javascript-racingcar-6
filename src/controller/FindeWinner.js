export const findWinner = (plyaersArray,scoreData) => {
  
  const winnerScore = Math.max(...scoreData);

  const temp = plyaersArray.map((element, index) => {

    return [element,scoreData[index]];
  })

  const table = Object.fromEntries(temp);
  const winnerArray = []

  for(let player in table) {
    
    if(table[player] === winnerScore) winnerArray.push(player);
    
  }

  return winnerArray;
}

