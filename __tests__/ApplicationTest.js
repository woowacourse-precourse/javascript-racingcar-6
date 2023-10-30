import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => { // 사용자 입력을 모의(mock)하는 mockQuestions 함수 정의
  MissionUtils.Console.readLineAsync = jest.fn();
  // MissionsUtils.Console.readLineAsync 함수를 Jest의 jest.fn()으로 대체함
  // 기존의 readLineAsync 함수를 테스트 중에 호출되는 대로 감시하도록 만듦
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    // readLineAsync 메서드를 호출할 때 특정 동작을 설정하기 위해 mockImplementation 메서드를 사용함
    // mockImplementation 메서드는 Jest에서 사용되는 메서드로, 기존 함수를 대체하고 원하는 동작을 지정하는 데 사용함
    // jest.fn().mockImplementation이라고 바꿔서 써도 됨
    const input = inputs.shift(); // shift 메서드를 사용하여 inputs 배열에서 첫 번째 요소를 제거하고 반환해서 input 변수에 할당함
    return Promise.resolve(input);
    // input 변수를 Promise.resolve를 사용하여 래핑하고 반환함
    // 이것은 비동기식(readLineAsync) 호출의 결과로 사용자 입력값(input)을 시뮬레이션함
  });
};

const mockRandoms = (numbers) => { // 무작위 숫자를 모의(mock)하는 mockRandoms 함수 정의
  MissionUtils.Random.pickNumberInRange = jest.fn();
  // MissionsUtils.Random.pickNumberInRange 함수를 Jest의 jest.fn()으로 대체함
  // 기존의 pickNumberInRange 함수를 테스트 중에 호출되는 대로 감시하도록 만듦
  numbers.reduce((acc, number) => {
    // reduce 메서드를 사용하여 numbers 배열의 각 요소를 순회하면서 현재 요소를 number에 할당하고 이를 사용하여 acc(누적값)를 업데이트함
    // acc는 현재까지의 누적값을 나타내며, 각 배열 요소가 순회될 때마다 갱신됨
    // number는 현재 순회 중인 배열 요소를 나타냄
    return acc.mockReturnValueOnce(number);
    // MissionUtils.Random.pickNumberInRange 함수의 반환값을 변경하며, 반환값이 다음 순회에서 acc에 할당됨
    // mockReturnValueOnce 메서드는 Jest에서 사용되는 메서드로, 여러 호출 사이에 서로 다른 값을 반환하거나 순차적으로 값을 반환하는 데 사용함
  }, MissionUtils.Random.pickNumberInRange);
  // acc의 초기값은 MissionUtils.Random.pickNumberInRange 함수의 반환값임
};

const getLogSpy = () => { // 콘솔 출력을 모의(mock)하는 getLogSpy 함수 정의
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  // Jest의 jest.spyOn() 메서드를 사용하여 MissionUtils.Console 객체의 print 메서드를 감시하고 모의화하는 작업을 수행함
  logSpy.mockClear();
  // logSpy라는 모의 객체에 연결된 모든 모의화된 호출을 지우는 mockClear 메서드를 호출함
  // 이렇게 함으로써 이전에 수행된 모의화된 호출의 기록을 지우고 처음부터 다시 모의할 수 있음
  return logSpy;
  // 모의화된 콘솔 출력 객체 logSpy를 반환함
  // 이렇게 반환된 logSpy 객체는 테스트 코드에서 실제 콘솔 출력을 모의하거나 감시하여 확인할 수 있음
};

/* 1. jest.fn()
   - 새로운 빈 Jest mock 함수를 생성함
   - 이 함수를 사용하여 함수의 동작을 완전히 모의화하거나, 호출 여부와 호출 횟수를 감시할 수 있음
   - 주로 특정 함수를 모의화하여 해당 함수가 특정한 인자와 함께 호출될 때 원하는 값을 반환하도록 설정하는 데 사용함
   - 사용 예: const myMockFunction = jest.fn();
  
  2. jest.spyOn()
   - 특정 객체 또는 모듈의 메서드를 감시(spy)하고 해당 메서드의 동작을 부분적으로 모의화함
   - 원래 메서드의 동작은 유지하면서 일부 동작을 변경하거나 감시할 때 사용됨
   - 특정 객체 또는 모듈의 메서드에 감시 스파이를 삽입하고, 해당 메서드를 호출하면 스파이가 호출을 감시하여
     호출 횟수, 전달된 인자, 반환값 등을 확인할 수 있음
   - 사용 예: const mySpy = jest.spyOn(object, 'methodName'); */

describe("자동차 경주 게임", () => { // 테스트 스위트(테스트 슈트)를 정의하는 블록
  test("전진-정지", async () => { // 첫 번째 테스트 케이스를 정의하는 블록
    // given
    const MOVING_FORWARD = 4; // 전진을 나타내는 상수
    const STOP = 3; // 정지를 나타내는 상수
    const inputs = ["pobi,woni", "1"];
    // inputs 배열은 테스트 중에 사용자 입력을 나타냄
    // 이 배열에 사용자 입력이 순차적으로 포함되어 테스트 동안 사용됨
    const outputs = ["pobi : -"];
    // outputs 배열은 테스트에서 기대되는 출력을 나타냄
    // 테스트가 실행된 후, 실제 출력이 이 배열에 있는 값들을 포함하는지 확인됨
    const randoms = [MOVING_FORWARD, STOP];
    // randoms 배열은 난수 발생을 모의화하기 위해 사용됨
    // 전진과 정지를 순차적으로 반환함
    const logSpy = getLogSpy();
    // getLogspy() 함수를 호출하여 콘솔 출력을 감시하는 spy 객체를 생성하고, 이 객체를 logSpy 변수에 저장함

    mockQuestions(inputs);
    // mockQuestions 함수를 호출하여 사용자 입력을 모의화함
    // inputs 배열의 요소가 순차적으로 반환되는 것을 시뮬레이션함
    mockRandoms([...randoms]);
    // mockRandoms 함수를 호출하여 난수 발생을 모의화함
    // randoms 배열에 있는 값을 순차적으로 반환하는 것을 시뮬레이션함

    // when (특정 동작 실행하고)
    const app = new App();
    await app.play();

    // then (그 결과가 기대한 대로 나오는지 확인함)
    outputs.forEach((output) => { // forEach 함수를 사용하여 배열의 각 요소를 반복함
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      // expect 함수를 사용하여 logSpy 객체가 특정 출력(output)을 포함하고 있는지 확인함
      // 이를 통해 콘솔 출력이 예상 출력과 일치하는지 확인할 수 있음
    });
  });

  test.each([ // 두 번째 테스트 케이스를 정의하는 블록
  // Jest의 test.each 함수는 동일한 테스트 케이스를 반복해서 실행하거나 다양한 입력 값에 대해 여러 테스트 케이스를 실행할 때 사용함
  // 이 함수를 사용하면 간결하게 여러 입력 조합에 대한 테스트를 작성할 수 있음
    [["pobi,javaji"]],
    [["pobi,eastjun"]]
    // test.each 함수의 인자로 2차원 배열을 전달함
    // 각 1차원 배열은 각 테스트 케이스에 대한 입력을 나타냄(두 개의 테스트 케이스가 정의됨)
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given (주어진 상황에서)
    mockQuestions(inputs);
    // mockQuestions 함수를 호출하여 입력값을 모의화함
    // 이 함수는 각 테스트 케이스에서 정의한 입력값을 app.play() 메서드에 전달하는 역할을 함

    // when (특정 동작 실행하고)
    const app = new App();

    // then (그 결과가 기대한 대로 나오는지 확인함)
    await expect(app.play()).rejects.toThrow("[ERROR]");
    // expect 함수를 사용하여 app.play() 메서드가 반환한 Promise가 에러를 던지는지 확인함
    // app.play()에서 발생한 에러가 "[ERROR]"라는 문자열을 던지는지 확인함
  });
});