class Winner {
  whosWinner(obj) {
    let maxValue = 0;
    let winners = [];
    for (const key in obj) {
      const value = obj[key];
      if (maxValue < value) maxValue = value;
    }
    for (const key in obj) {
      if (obj[key] === maxValue) winners.push(key);
    }
    return winners.map((winner) => winner).join(", ");
  }
}
export default Winner;
