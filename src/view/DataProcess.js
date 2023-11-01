import OutputView from './OutputView.js';

const DataProcess = {
  divideCarName: (carNames) => (carNames.split(',')),
  transDistanceToHyphen: (distance) => ('-'.repeat(distance)),
  transOutputFormDistance: (carName, distance) => {
    OutputView.outputDistanceCar(`${carName} : ${DataProcess.transDistanceToHyphen(distance)}`);
  },
}

export default DataProcess;
