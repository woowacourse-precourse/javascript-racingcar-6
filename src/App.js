import { Console, MissionUtils } from "@woowacourse/mission-utils";
import FowardConditions from "./FowardCondition.js";
/*
  주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
  각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
  자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
  사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
  전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
  자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
  우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
  사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.
*/
class App {
  async play() {
    await Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const cars = await Console.readLineAsync('');
    const users = cars.split(',');
    // const carsScores = new Map();
    
    /*자동차 이름과 기본 점수 설정 => gameSetting 으로 빼도 될거 같음 */ 
    const carsScores = [];
    for (let i = 0; i < users.length; i++) {
      if(users[i].length>5){
        Console.print(`${users[i]}오류`);
        throw Error("[ERROR] 자동차의 이름은 5글자 이하여야 합니다.");
      }else{
        // carsScores.set(users[i],0);
        carsScores.push([users[i],0]);
      }
    } 

    await Console.print(carsScores);
    carsScores[0][1]+=1;
    await Console.print(`${carsScores[0][0]} : `+"-".repeat(carsScores[0][1]));
    await Console.print(cars);
    await Console.print(users);
    FowardConditions();
    await Console.print("시도할 횟수는 몇 회인가요?");
    const numberOfAttempts = await Console.readLineAsync('');
    // await Console.print(numberOfAttempts);
  }
}

// const status = await Console.readLineAsync("게임 을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

export default App;
