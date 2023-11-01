import { MissionUtils } from "@woowacourse/mission-utils";

function print_(num) {
  let str = ''
  for(let i = 0; i<num; i++) {
    str += '-'
  }
  return str
}

function winner(arr, indexArr) {
  let str = ''
  for(let i = 0; i< indexArr.length ; i++) {
    if (i == 0) {
      str += arr[indexArr[i]]
    } else {
      str += (', ' + arr[indexArr[i]])
    }
  }
  return str
}

class App {
  async play() {
    const cars = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const count = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    let carsArr = cars.split(",");

    carsArr.map((a)=> {
      if (a.length > 5) {
        throw Error('[ERROR] 숫자가 잘못된 형식입니다.')
      }
    })

    let carsFoward = []
    for( let i = 0; i<count; i++) {
      carsFoward.push(0)
    }
    MissionUtils.Console.print('실행 결과')
    
    for(let i = 0; i<count; i++) {
      carsArr.map((a, i)=>{
        let number = MissionUtils.Random.pickNumberInRange(0, 9);
        if (number > 3) {
          carsFoward[i]++;
        }
        MissionUtils.Console.print(a + ' : ' + print_(carsFoward[i]))
      })
      MissionUtils.Console.print('')
    }

    let winnerIndex = []
    let max = Math.max(...carsFoward)
    for (let i = 0; i < cars.length ; i++) {
      if(carsFoward[i] == max) {
        winnerIndex.push(i)
      }
    }
    MissionUtils.Console.print('최종 우승자 : ' + winner(carsArr, winnerIndex))
  }
} 

export default App;