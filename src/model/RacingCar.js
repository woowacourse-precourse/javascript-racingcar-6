import { Random } from '@woowacourse/mission-utils'
import { GAME_RULE } from '../constants'

class RacingCar {
  constructor(name) {
    this.name = name
    this.fowardCount = 0
    this.stopCount = 0
  }

  tryMove() {
    const random = Random.pickNumberInRange(GAME_RULE.MIN_NUMBER, GAME_RULE.MAX_NUMBER)

    if (random >= GAME_RULE.FORWARD_STANDARD) {
      this.moveForward()
    } else {
      this.stop()
    }
  }

  moveForward() {
    this.fowardCount += 1
  }

  stop() {
    this.stopCount += 1
  }

  getName() {
    return this.name
  }

  getDistance() {
    return this.fowardCount
  }
}

export default RacingCar
