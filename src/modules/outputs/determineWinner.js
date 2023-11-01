async function determineWinner(result) {
  const winners = [];

  const distance = result.map((item) => {
    return item.slice(item.indexOf('-'), item.lastIndexOf('-') + 1);
  });

  const maxLength = Math.max(...distance.map((item) => item.length));

  result.filter((item, idx) => {
    if (distance[idx].length === maxLength) {
      winners.push(item);
    }
  });

  return winners;
}

export default determineWinner;
