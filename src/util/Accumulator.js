import Converter from "./Converter.js";

export const traceAccumulator = (traceData, randomArray) => {
  const newTraceData = Converter.traceFilter(randomArray);
  
  return traceData.map((element, index) => element + newTraceData[index]); 
}

export const scoreAccumulator = (scoreData, randomArray) => {
  const newScoreData = Converter.scoreFilter(randomArray);

  return scoreData.map((element, index) => element + newScoreData[index]); 
}



