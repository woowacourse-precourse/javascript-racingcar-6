import OutputView from './OutputView';

const DataProcess = {
  divideCarName: (carNames) => (carNames.split(',')),
  transDistanceToHyphen: (distance) => ('-'.repeat(distance)),
  transOutputFormDistance: (carName, distance) => {
    OutputView.outputDistanceCar(`${carName} : ${DataProcess.transDistanceToHyphen(distance)}`);
  },
  transOutputFormWinner: (winners) => {
    OutputView.outputWinnerName(winners.reduce((str, winner) => `${str}, ${winner}`));
  },
  endLine: () => OutputView.outputDistanceCar(''),
};

export default DataProcess;
