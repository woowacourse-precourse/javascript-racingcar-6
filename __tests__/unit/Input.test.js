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

function evaluateValidation(carNames) {
  try {
    Validator.evaluateCarNames(carNames);
  } catch (e) {
    throw new InputException(e);
  }
}

describe('입력 받은 자동차의 이름이', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('쉼표를 포함하는가?', async () => {
    const inputs = ['tobi,navi,gori'];

    mockRequestValue(inputs);

    const carNames = await Input.enterCarNames();
    expect(carNames.length).toBeGreaterThan(0);
  });
});

describe('쉼표로 구분한 이름이', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('길이가 1~5자의 이름인가?', async () => {
    const inputs = ['t,na,gdd,sdfg,dadfg'];

    mockRequestValue(inputs);

    const carNames = await Input.enterCarNames();
    carNames.forEach((name) => {
      expect(name.length).toBeGreaterThan(0);
      expect(name.length).toBeLessThanOrEqual(5);
    });
  });

  test('특수 기호를 포함 했을 경우 예외가 발생하는가?', async () => {
    const inputs = ['a=b,b,c'];

    mockRequestValue(inputs);

    const carNames = await Input.enterCarNames();
    expect(() => evaluateValidation(carNames)).toThrow('[ERROR]');
  });

  test('길이가 5자리를 초과할 경우 예외가 발생하는가?', async () => {
    const inputs = ['asdb,bbbaaa,c'];

    mockRequestValue(inputs);

    const carNames = await Input.enterCarNames();
    expect(() => evaluateValidation(carNames)).toThrow('[ERROR]');
  });

  test('공백을 포함할 경우 예외가 발생하는가?', async () => {
    const inputs = ['ab,b, ,c'];

    mockRequestValue(inputs);

    const carNames = await Input.enterCarNames();
    expect(() => evaluateValidation(carNames)).toThrow('[ERROR]');
  });
});

describe('입력 받은 시도 횟수가', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('0이상의 정수인가?', async () => {
    
  });

  test('숫자가 아닐경우 예외가 발생하는가?', () => {

  });

  test('0 보다 작을 경우 예외가 발생하는가?', () => {

  });
});