import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const inp = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n')
    const car_names = inp.split(',').map(e=>e.trim())
    let car_positions = new Array(car_names.length).fill(0)
    const game_cnt = Number(await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'))

    MissionUtils.Console.print("\n실행 결과")
    for(let i=0; i<game_cnt; i++){
      car_positions = oneGameStart(car_positions)
      printRacing(car_names, car_positions)
    }
    printWinner(car_names, car_positions)
  }
}

const oneGameStart = (car_positions) => {
  const new_car_positions = [...car_positions]
  for(let i in new_car_positions){
    if(moveForwardByRandom()){
      new_car_positions[i] ++
    }
  }
  return new_car_positions
}

const moveForwardByRandom = () => {
  const random = MissionUtils.Random.pickNumberInRange(1,9)
  if(random >= 4) return true
  return false
}

const printRacing = (car_names, car_positions) => {
  let print_ary = []

  for(let i=0; i<car_names.length; i++){
    print_ary.push(car_names[i] + " : " + "-".repeat(car_positions[i]))
  }

  MissionUtils.Console.print(print_ary.join('\n') + '\n')
}

const printWinner = (car_names, car_positions) => {
  let winners = []
  let max = -1

  for(let i=0; i<car_names.length; i++){
    if(car_positions[i] > max){
      winners = [car_names[i]]
      max = car_positions[i]
    }else if(car_positions[i] === max){
      winners.push(car_names[i])
    }
  }

  MissionUtils.Console.print('최종 우승자 : ' + winners.join(', '))
}

/* 

# 기능 목록
### oneGameStart
- 하나의 게임을 실행한다
- 각 자동차 별로 moveForwardByRandom를 이용하여 전진 시킨다 
- printRacing을 통해 결과를 출력한다

### moveForwardByRandom
- 0 ~ 9사이 무작위 값을 통하여 무작위 값이 4이상인지 판별한다
- 출력 : moveForward(boolean)

### printRacing
- 각 자동차 별 배열을 통해 출력 포맷에 맞춰 출력한다
- 출력 : result(string)

*/
export default App;
