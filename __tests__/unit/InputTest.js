import Input from '../../src/Input';
import Validator from '../../src/Validator';
import InputException from '../../src/InputException';

const mockRequestValue = (inputs) => {
  Input.enterCarNames = jest.fn();

  Input.enterCarNames.mockImplementation(() => {
    const inupt = inputs.shift();
    const splitedName = inupt.split(',');
    return Promise.resolve(splitedName);
  });
};

const mockRequestTotalRound = (inputs) => {
  Input.enterTotalRound = jest.fn();

  Input.enterTotalRound.mockImplementation(() => {
    const inupt = inputs.shift();
    return Promise.resolve(inupt);
  });
};

function evaluatNameseValidation(carNames) {
  try {
    Validator.evaluateCarNames(carNames);
  } catch (e) {
    throw new InputException(e);
  }
}

function evaluateTotalRound(tryingCount) {
  try {
    Validator.evaluateTotalRound(tryingCount);
  } catch (e) {
    throw new InputException(e);
  }
}

describe('입력 받은 자동차의 이름이', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('쉼표를 포함하는가?', async () => {
    // given
    const inputs = ['tobi,navi,gori'];
    
    // when
    mockRequestValue(inputs);
    const carNames = await Input.enterCarNames();

    // then
    expect(carNames.length).toBeGreaterThan(0);
  });
});

describe('쉼표로 구분한 이름이', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('길이가 1~5자의 이름인가?', async () => {
    // given
    const inputs = ['t,na,gdd,sdfg,dadfg'];

    // when
    mockRequestValue(inputs);
    const carNames = await Input.enterCarNames();

    // then
    carNames.forEach((name) => {
      expect(name.length).toBeGreaterThan(0);
      expect(name.length).toBeLessThanOrEqual(5);
    });
  });

  test('특수 기호를 포함 했을 경우 예외가 발생하는가?', async () => {
    // given
    const inputs = ['a=b,b,c'];

    // when
    mockRequestValue(inputs);
    const carNames = await Input.enterCarNames();

    // then
    expect(() => evaluatNameseValidation(carNames)).toThrow('[ERROR]');
  });

  test('길이가 5자리를 초과할 경우 예외가 발생하는가?', async () => {
    // given
    const inputs = ['asdb,bbbaaa,c'];

    // when
    mockRequestValue(inputs);
    const carNames = await Input.enterCarNames();

    // then
    expect(() => evaluatNameseValidation(carNames)).toThrow('[ERROR]');
  });

  test('공백을 포함할 경우 예외가 발생하는가?', async () => {
    // given
    const inputs = ['ab,b, ,c'];

    // when
    mockRequestValue(inputs);
    const carNames = await Input.enterCarNames();

    // then
    expect(() => evaluatNameseValidation(carNames)).toThrow('[ERROR]');
  });

  test('중복된 이름이 있을경우 예외가 발생하는가?', async () => {
    const inputs = ['pobi', 'pobi', 'nori'];

    mockRequestValue(inputs);
    const carNames = await Input.enterCarNames();

    expect(() => evaluatNameseValidation(carNames)).toThrow('[ERROR]');
  })
});

/**
 * 전체 라운드 횟수에 관한 테스트
 */
describe('입력 받은 시도 횟수가', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('0이상의 정수인가?', async () => {
    const inputs = [4];

    mockRequestTotalRound(inputs);

    const tryingCount = await Input.enterTotalRound();
    expect(tryingCount).toBeGreaterThan(0);
  });

  test('숫자가 아닐경우 예외가 발생하는가?', async () => {
    const inputs = ['Number'];

    mockRequestTotalRound(inputs);

    const tryingCount = await Input.enterTotalRound();
    expect(() => evaluateTotalRound(tryingCount)).toThrow('[ERROR]');
  });

  test('0 보다 작을 경우 예외가 발생하는가?', async () => {
    const inputs = [-2];

    mockRequestTotalRound(inputs);

    const tryingCount = await Input.enterTotalRound();
    expect(() => evaluateTotalRound(tryingCount)).toThrow('[ERROR]');
  });
});
