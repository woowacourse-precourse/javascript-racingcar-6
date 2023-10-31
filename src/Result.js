import { Console } from '@woowacourse/mission-utils'

class Result{

  #player
  #point = []
  #maxPoint
  #winner = []
  

  async result(arr){

    this.#player = arr

    arr.forEach((player) => {
      this.#point.push(player.point.length)
    })

    await this.#getResult(this.#point);
    await this.#getWinner(this.#maxPoint);

    return this.#showResult(this.#winner);
  }

  async #getResult(points){
    this.#maxPoint = Math.max(...points)
  }

  async #getWinner(max){
    this.#player.forEach((player) => {
      if(player.point.length === max){
        this.#winner.push(player.name)
      }
    })
  }

  async #showResult(winner){
    const WINNER = winner.join(',')
    return Console.print(`최종 우승자 : ${WINNER}`)
  }
}
export default Result