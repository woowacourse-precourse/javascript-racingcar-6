class Winner {
  calculateWinners(lastRaceResult) {
    const lastCarResults = lastRaceResult.split('\n').map((line) => {
      const [name, position] = line.split(' : ');
      return { name, position };
    });

    const maxPositionCount = Math.max(
      ...lastCarResults.map((car) => car.position.split('-').length - 1),
    );
    const winners = lastCarResults.filter(
      (car) => car.position.split('-').length - 1 === maxPositionCount,
    );
    const winnerNames = winners.map((winner) => winner.name);

    return winnerNames;
  }
}

export default Winner;
