import { generateCar } from '../startRace'

const validateRaceCount = (carNamesToArray, raceCounts) => {
  if (Number.isNaN(raceCounts)) throw new Error('[ERROR]');

  if (!raceCounts) throw new Error('[ERROR]');
  
  generateCar(carNamesToArray, raceCounts);
}

export default validateRaceCount