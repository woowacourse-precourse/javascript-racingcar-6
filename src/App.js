import { Console, Random} from '@woowacourse/mission-utils';

class App {
  async play() {

    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)')

    const player = await this.getPlayer()
    Console.print(player)

    const playerNumber = await this.createCar(player.split(','))

    Console.print('시도할 횟수는 몇회인가요?')

    const roundNumber = await Console.readLineAsync()

    Console.print(roundNumber)

    let moveCar = await this.moveCar(roundNumber, playerNumber)
    let obj = await this.createObj(player.split(','), moveCar)

    Console.print('실행 결과')


    let winner = []
    let winnerValue = 0
    for (let key in obj) {
      Console.print(`${key} : ${obj[key]}`)
      if (winnerValue < obj[key].length) {
        winnerValue = obj[key].length
        winner = []
        winner.push(key)
      } else if (winnerValue === obj[key].length) {
        winner.push(key)
      }
    }

    Console.print(winner.join(','))
    Console.print(winnerValue)
  }

  async getPlayer() {
    const player = await Console.readLineAsync()
    const playerArr = player.split(',')
    playerArr.forEach((ele)=> {
      if( ele.length > 5) {
        throw new Error('[ERROR] 플레이어의 이름이 너무 깁니다.');
      }
    })
    return player
  }

  async createCar(players) {
    return players.length
  }

  async randomValue(playerNumber) {
    let valueArr = []

    for(let i = 0; i < playerNumber; i++) {
      valueArr.push(Random.pickNumberInRange())
    }

    return valueArr.map((ele)=> {
      if (ele >= 4) {
        return '-'
      }
      return ''
    })
  }

  async moveCar(roundNumber, playerNumber) {
    let arr = []
    let moveArr = new Array(playerNumber).fill('')

    let arr2 = [['','-'],['-','-']]
    Console.print('arr2rkanjdla')
    for(let i = 0; i < roundNumber; i++) {
      arr2.push(await this.randomValue(playerNumber))
    }
    for (let i = 0; i < playerNumber; i++) {
      arr2.forEach((ele)=> {
        moveArr[i] += ele[i]
      })
    }

    return moveArr
  }

  async createObj(playerArr, moveArr) {
    let obj = {}
    for (let i = 0; i < 2; i++) {
      obj[playerArr[i]] = moveArr[i]
    }
    return obj
  }


}

export default App;
