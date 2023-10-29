import message from "./Message.js";

const gameSetting = ()=>{
  Console.print(message.game.START_MESSAGE);
  const cars = Console.readLineAsync('');
  const users = cars.split(',');
  // const carsScores = new Map();
  
  /*자동차 이름과 기본 점수 설정 => gameSetting 으로 빼도 될거 같음 */ 
  const carsScores = [];
  for (let i = 0; i < users.length; i++) {
    if(users[i].length>5){
      Console.print(`${users[i]}오류`);
      throw Error(message.error.NAME_CREATION_ERROR);
    }else{
      carsScores.push([users[i],0]);
    }
  }
}
export default gameSetting;

