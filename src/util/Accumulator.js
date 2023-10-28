import Converter from "./Converter.js";


export const TraceAccumulator = (traceData, randomArray) => {
  const newScoreData = Converter.scoreFilter(randomArray);
  const trace = '';
  const newTraceData = newScoreData.map((element) => trace.padStart(element, '-'));
  
  return traceData.map((element, index) => element + newTraceData[index]); //수정하기, 빈배열에도 대응해야됨
}

export const scoreAccumulator = (scoreData, randomArray) => {
  const newScoreData = Converter.scoreFilter(randomArray);

  return scoreData.map((element, index) => element + newScoreData[index]); //수정하기, 빈 배열에도 대응해야됨
}



