import generateNumberInRange from '../common/middleware/randomGenerator.js';

// 각 자동차들이 시도 횟수당 부여받는 랜덤 숫자 생성 클래스
class RandomGenerator {
  constructor() {
    this.RandomNumber = this.generateRandomNumber();
  }

  // 0에서 9 사이의 무작위로 한 자리수 구하기
  generateRandomNumber() {
    const generatedRandomNumber = new Set();

    while (generatedRandomNumber.size < 1) {
      const newRandomNumber = generateNumberInRange(0, 9);
      generatedRandomNumber.add(newRandomNumber);
    }

    return Array.from(generatedRandomNumber).join('');
  }
}

export default RandomGenerator;
