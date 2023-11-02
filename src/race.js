import Garage from './Garage';

const startRace = (garage, attemptNumber) => {
  if (attemptNumber <= 0) {
    return garage;
  }

  garage.runCars().printCarsAfterRun();

  return startRace(garage, attemptNumber - 1);
};

const race = (carNames, attemptNumber) => {
  const garage = new Garage(carNames);

  Garage.printStartRaceResult();
  startRace(garage, attemptNumber).printCarRaceWinners();
};

export default race;
