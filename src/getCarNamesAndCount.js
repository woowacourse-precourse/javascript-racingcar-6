import { Console } from '@woowacourse/mission-utils'

const getCarNames = () => {
  const carNames = Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
  const carNamesToArray = carNames.split('');
  //콘솔로그 지우기
  console.log(carNamesToArray,'이름')
  return carNamesToArray;
}

module.exports = { getCarNames }