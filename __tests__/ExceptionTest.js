import Exception from '../src/Exception';
const exception = new Exception;
describe('참가자명 입력 시 예외 처리 테스트', () => {
  test('자동차의 이름이 1개만 입력된 경우', () => {
    expect(() => {
      exception.carNameInputException('soom');
    }).toThrow('[ERROR]');
  });

  test('자동차의 이름이 5자 이상인 경우', () => {
    expect(() => {
      exception.carNameInputException('soominnnn,shin')
    }).toThrow('[ERROR]');
  });

  test('자동차의 이름을 입력하지 않은 경우', () => {
    expect(() => {
      exception.carNameInputException(' ');
    }).toThrow('[ERROR]');
  });

  test('자동차의 이름에 공백이 포함되는 경우', () => {
    expect(() => {
      exception.carNameInputException('soom,');
    }).toThrow('[ERROR]');
  });

  test('자동차의 이름이 중복되는 경우', () => {
    expect(() => {
      exception.carNameInputException('soom,soom')
    }).toThrow('[ERROR]');
  });

  test('자동차의 이름에 띄어쓰기가 들어가는 경우', () => {
    expect(() => {
      exception.carNameInputException('so om');
    }).toThrow('[ERROR]');
  });

  test('자동차의 이름에 띄어쓰기가 들어가는 경우 2', () => {
    expect(() => {
      exception.carNameInputException('so om,mi nn');
    }).toThrow('[ERROR]');
  });

  test('자동차의 이름에 띄어쓰기가 들어가는 경우 3', () => {
    expect(() => {
      exception.carNameInputException('soom,mi nn,shin');
    }).toThrow('[ERROR]');
  });

  test('자동차의 이름에 특수문자가 들어가는 경우', () => {
    expect(() => {
      exception.carNameInputException('soom!,soom~');
    }).toThrow('[ERROR]');
  });
});

describe('시도 횟수 입력 시 예외 처리 테스트', () => {
  test('시도 횟수가 숫자가 아닌 경우', () => {
    expect(() => {
      exception.numberInputException('soom');
    }).toThrow('[ERROR]');
  });

  test('시도 횟수가 0인 경우', () => {
    expect(()=> {
      exception.numberInputException('0');
    }).toThrow('[ERROR]');
  })
});