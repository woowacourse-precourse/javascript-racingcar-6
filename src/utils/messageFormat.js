const MessageFormat = {
  error: (message) => `[ERROR] ${message}`,
  winners: (winners) => `최종 우승자: ${winners.join(', ')}`,
  result: (roundResult) => `\n실행 결과\n${roundResult}\n`,
  carPosition: (car) => `${car.name}: ${'-'.repeat(car.position)}`,
  round: (raceResult) =>
    raceResult
      .map((round) => round.map(MessageFormat.carPosition).join('\n'))
      .join('\n\n'),
};

export default MessageFormat;
