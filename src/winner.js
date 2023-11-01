const winner = (result) => {
  let maxHyphenCount = 0;
  let winners = [];

  for (const player in result) {
    const hyphenCount = (result[player].match(/-/g) || []).length;

    if (hyphenCount > maxHyphenCount) {
      maxHyphenCount = hyphenCount;
      winners = [player];
    } else if (hyphenCount === maxHyphenCount) {
      winners.push(player);
    }
  }

  return winners.join(", ");
};

export default winner;
