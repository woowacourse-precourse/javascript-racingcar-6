import getCarNames from "../input/getCarNames";
import getRaceCount from "../input/getRaceCount";

export default async function initGame(){
  // 입력 및 유효성 검사
  const carNames = await getCarNames(); 
  const carScores = carNames.map(name => ({ name, score: 0 }));   
  const totalRaceCount = await getRaceCount();

  return [carScores, totalRaceCount];
};



