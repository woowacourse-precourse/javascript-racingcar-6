import Converter from "./Converter.js";

export const traceAccumulator = (traceArray, randomArray) => {
  const newTraceArray = Converter.traceFilter(randomArray);
  
  return traceArray.map((trace, index) => trace + newTraceArray[index]); 
};

export const scoreAccumulator = (scoreArray, randomArray) => {
  const newScoreArray = Converter.scoreFilter(randomArray);

  return scoreArray.map((score, index) => score + newScoreArray[index]); 
};
