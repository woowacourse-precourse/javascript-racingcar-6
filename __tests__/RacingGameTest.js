import { Random } from '@woowacourse/mission-utils'
import RacingCar from '../src/model/RacingCar'
import RacingGame from '../src/model/RacingGame'

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn()
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number)
  }, Random.pickNumberInRange)
}

describe('레이싱게임 테스트', () => {
  test('5칸 시도해서 우승자를 알려준다. - test1, test2, test3 중 test1이 우승', () => {
    mockRandoms(
      [
        [4, 4, 4],
        [4, 4, 3],
        [4, 4, 4],
        [4, 4, 3],
        [4, 3, 4],
      ].flat()
    )

    const test1 = new RacingCar('test1')
    const test2 = new RacingCar('test2')
    const test3 = new RacingCar('test3')
    const racingGame = new RacingGame([test1, test2, test3])

    Array.from({ length: 5 }, () => racingGame.tryOneTime())

    expect(racingGame.getWinner()).toEqual([test1])
  })

  test('5칸 시도해서 우승자를 알려준다. - test1, test2, test3 중 test1, test2이 우승', () => {
    mockRandoms(
      [
        [4, 4, 4],
        [4, 4, 3],
        [4, 4, 4],
        [4, 4, 3],
        [3, 3, 4],
      ].flat()
    )
    const test1 = new RacingCar('test1')
    const test2 = new RacingCar('test2')
    const test3 = new RacingCar('test3')
    const racingGame = new RacingGame([test1, test2, test3])

    Array.from({ length: 5 }, () => racingGame.tryOneTime())

    expect(racingGame.getWinner()).toEqual([test1, test2])
  })
})
