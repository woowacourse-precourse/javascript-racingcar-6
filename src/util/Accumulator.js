import ScoreConverter from "./ScoreConverter.js";

export const racingTraceAccumulator = (currentTraceArray, randomArray) => {
  const newScoreArray = ScoreConverter.generator(randomArray);
  const trace = '';
  const newTraceArray = newScoreArray.map((element) => trace.padStart(element, '-'));
  
  return currentTraceArray.map((element, index) => element + newTraceArray[index]);
}

export const scoreAccumulator = (CurrentScoreArray, randomArray) => {
  const newScoreArray = ScoreConverter.generator(randomArray);

  return CurrentScoreArray.map((element, index) => element + newScoreArray[index]);
}


