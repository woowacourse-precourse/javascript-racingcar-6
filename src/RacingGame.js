import { Console, Random } from '@woowacourse/mission-utils'

class RacingGame{

  #player = []

  async start(arr, num){
    Console.print("실행 결과")
    this.#setPlayer(arr);
    await this.#playRace(num);

    return this.#player
    
  }

  async #playRace(num){
    let conut = 0;
    while(conut < num){
      await this.#goOrStop(this.#player);
      Console.print('')
      conut++
    }
  }


  #setPlayer(arr){
  arr.forEach((name) => {
      this.#player.push({
        name: name,
        point: ''
      }

      ) 
    })
  }

  async #goOrStop(arr){
    arr.map((player) => {
      let num = Random.pickNumberInRange(0, 9)
      if(num >= 4){
        player.point = `${player.point}-`
      }
      Console.print(`${player.name} : ${player.point}`)
    })
  }

}

export default RacingGame