const MessageFormat = {
  error: (message) => `[ERROR] ${message}`,
  winner: (winners) => `최종 우승자 : ${winners.join(', ')}`,
  carPosition: (car) => `${car.name} : ${'-'.repeat(car.position)}`,
  roundResult: (round) => round.map(MessageFormat.carPosition).join('\n'),
  raceResult: (raceResult) => {
    const rounds = raceResult.map(MessageFormat.roundResult).join('\n\n');

    return `\n실행 결과\n${rounds}\n`;
  },
};

export default MessageFormat;
