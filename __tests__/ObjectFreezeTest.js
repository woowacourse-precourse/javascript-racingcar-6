import { convertObjectListFreeze } from "../src/Util/ObjectFreeze.js";

describe("객체 배열 동결화 테스트, Jest에서는 에러가 발생하는지 체크", () => {
  const racingCarList = [
    { carName : 'pobi', moveCount : 0 },
    { carName : 'woni', moveCount : 0 },
    { carName : 'jun', moveCount : 0 },
  ]

  const freezeRacingCarList = convertObjectListFreeze(racingCarList);

  test("동결화 한 객체 프로퍼티 중 자동차 이름 변경시 에러 ", () => {
    expect(() => freezeRacingCarList[0].carName = "crong").toThrow()
  })

  test("동결화 하지 않은 객체 프로퍼티 중 자동차 이름 변경 가능 ", () => {
    expect(() => racingCarList[0].carName = "crong").not.toThrow()
  })

  test("동결화 한 객체 프로퍼티 중 자동차 움직임 횟수 변경시 에러 ", () => {
    expect(() => freezeRacingCarList[0].moveCount = 2).toThrow()
  })

  test("동결화 하지 않은 객체 프로퍼티 중 자동차 움직임 횟수 변경 가능 ", () => {
    expect(() => racingCarList[0].moveCount = 2).not.toThrow()
  })

  test("배열에 값을 넣을 경우 에러 발생", () => {
    const newCar = { carName : 'crong', moveCount : 0 };
    expect(() => freezeRacingCarList.push(newCar)).toThrow();
  })

  test("배열에 값을 뺄 때 에러 발생", () => {
    expect(() => freezeRacingCarList.pop()).toThrow();
  })

  test("배열에 객체를 변경할 때 에러 발생", () => {
    const newCar = { carName : 'crong', moveCount : 0 };
    expect(() => freezeRacingCarList[0] = newCar).toThrow();
  })

})