import { Random } from '@woowacourse/mission-utils'
import RacingCar from '../src/model/RacingCar'

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn()
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number)
  }, Random.pickNumberInRange)
}

describe('레이싱카 테스트', () => {
  test('두 번 전진한다. - 전진, 전진', () => {
    mockRandoms([4, 4])

    const racingCar = new RacingCar('test')

    racingCar.tryMove()
    racingCar.tryMove()

    expect(racingCar.getDistance()).toBe(2)
  })
  test('두 번 전진한다. - 전진, 정지, 전진, 정지', () => {
    mockRandoms([4, 3, 4, 3])

    const racingCar = new RacingCar('test')

    racingCar.tryMove()
    racingCar.tryMove()
    racingCar.tryMove()
    racingCar.tryMove()

    expect(racingCar.getDistance()).toBe(2)
  })
})
