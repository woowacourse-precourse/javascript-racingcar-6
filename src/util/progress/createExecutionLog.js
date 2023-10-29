import { defaultErrorHandler } from '../error/errorhandler.js';
import { consolePrint } from '../libraryFeatures/MissionUtilsHandler.js';

export default async function createExecutionLog(currentGoAndStops, currentCarData) {
  try {
    const carKeys = [...currentCarData.keys()];
    const carValues = [...currentCarData.values()];
    const goAndStop = [...currentGoAndStops];
    const updatedCarData = new Map();
    const singleStatus = goAndStop[0];
    let resultString = '';

    singleStatus.forEach((item, index) => {
      const newCarValue = carValues[index] + item;
      const racerString = `${carKeys[index]} : ${newCarValue} \n`;
      updatedCarData.set(carKeys[index], newCarValue);
      resultString += racerString;
    });

    consolePrint(resultString);
    goAndStop.shift();

    if (goAndStop.length !== 0) {
      return createExecutionLog(goAndStop, updatedCarData);
    }

    return updatedCarData;
  } catch (error) {
    const ERROR = defaultErrorHandler(error);
    return ERROR;
  }
}
