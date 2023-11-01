import Exception from "../src/exception/Exception.js";
let globalIndex = 0;

describe('예외 발생 모든 경우의 수 살펴보기', () => {
  test.each([
    "카마인,,카멘",
    "카멘",
    "꿈꾸지 않는 자들의 낙원,루페온",
    "카단,카마인,카마인,카단,카제로스"
  ])('문구의 첫 시작이 [ERROR]로 시작하는지 테스트',  (inputs) => {
    const check = new Exception();
  
    expect(() => check.name(inputs)).toThrow("[ERROR]");
  });

  test.each([
    "pobi,,crong,jaju",
    "pobi",
    "apple,banana,watermelon",
    "kiwi,apple,melon,kiwi,apple"
  ])('[ERROR]문구 이후 피드백 메세지를 잘 출력하는지 테스트', (inputs) => {
    const check = new Exception();

    const errorMesseage = [
    '쉼표(,)의 사용이 잘못되었습니다.',
    '게임을 시작하기 위해선 2대 이상의 자동차가 필요합니다.',
    '자동차 이름은 최대 5글자까지 가능합니다. [banana,watermelon]',
    '중복된 자동차 이름이 포함되어 있습니다. [kiwi,apple]'];
    
    expect(() => check.name(inputs)).toThrow(errorMesseage[globalIndex]);

    globalIndex += 1;  
  });
});
