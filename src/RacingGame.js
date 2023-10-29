import { Console, Random } from '@woowacourse/mission-utils'

class RacingGame{

  #player = []

  async start(arr, num){
    Console.print("실행 결과")
    this.#setPlayer(arr);

    let conut = 0;
    while(conut < num){
      await this.#goOrStop(this.#player);
      Console.print('')
      conut++
    }

    return this.#player
    
  }

  #setPlayer(arr){
  arr.forEach((name) => {
      this.#player.push({
        name: name,
        point: '',
        result: 0
      }

      ) 
    })
  }

  async #goOrStop(arr){
    arr.map((player) => {
      let num = Random.pickNumberInRange(0, 9)
      if(num >= 4){
        player.point = `${player.point}-`
        player.result = player.result++
      }
      Console.print(`${player.name} : ${player.point}`)
    })
  }

}

export default RacingGame