import OutputView from './OutputView.js';

const DataProcess = {
  divideCarName: (carNames) => (carNames.split(',')),
  transDistanceToHyphen: (distance) => ('-'.repeat(distance)),
  transOutputFormDistance: (carName, distance) => {
    OutputView.outputDistanceCar(`${carName} : ${DataProcess.transDistanceToHyphen(distance)}`);
  },
  transOutputFormWinner: (winners) => {
    OutputView.outputWinnerName(winners.reduce((str, winner) => str + ', ' + winner));
  }
}

export default DataProcess;
