import printResult from '../src/game/printResult.js';
import Lap from '../src/game/Lap.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe("story1. 자동차 이름 입력", () => {
  test("입력을 받아서 문자열을 반환한다.", async () => {
    // given
    const input = ['산,바다,강,하늘'];
    const answer = '산,바다,강,하늘';

    // when
    mockQuestions(input);
    const result = await MissionUtils.Console.readLineAsync();

    // then
    expect(result).toEqual(answer);
  });

  test("문자열을 받아서 배열로 반환한다.", () => {
    const input = "산,바다,강,하늘";
    const result = input.split(",");
    const answer = ['산', '바다', '강', '하늘'];

    // then
    expect(result).toEqual(answer);
  });
});

describe("story2. 실행횟수 입력", () => {
  test("입력을 받아서 숫자를 반환한다.", () => {
    // given
    const input = '7';
    const result = Number(input);

    // then
    expect(result).toEqual(7);
  });
});

// story3. 유효성 테스트는 ValidationTest로 확인합니다.

describe("story4. 차수별 진행상황 출력", () => {
  test("자동차 이름을 가지고, 기록용 배열을 만든다.", () => {
    // given
    const result = [];
    const array = ['산', '바다', '강', '하늘'];
    const answer = ['산 : ', '바다 : ', '강 : ', '하늘 : '];

    // when
    array.forEach((input) => {
      result.push(`${input} : `);
    });

    // then
    expect(result).toEqual(answer);
  });

  test("숫자가 4이상일 경우 record 배열에 '-' 추가", () => {
    // given
    const randoms = [9, 3, 2, 8];
    const result = ['산 : ', '바다 : ', '강 : ', '하늘 : '];
    const answer = ['산 : -', '바다 : ', '강 : ', '하늘 : -'];

    mockRandoms(randoms);

    // when
    for (let i = 0; i < result.length; i += 1) {
      const randomNum = MissionUtils.Random.pickNumberInRange();
      if (randomNum > 3) result[i] += '-';
    }

    // then
    expect(result).toEqual(answer);
  });

  test("goForward 테스트, 4이상이면 해당 자동차를 전진시킨다.", () => {
    // given
    const randoms = [9, 3, 2, 8];
    const array = ['산 : ', '바다 : ', '강 : ', '하늘 : '];
    const answer = ['산 : -', '바다 : ', '강 : ', '하늘 : -'];

    mockRandoms(randoms);

    // when
    const lap = new Lap(array);
    lap.goForward(array);

    // then
    expect(array).toEqual(answer);
  });

  test("printStage 테스트, 요구사항에 맞춰 출력한다.", () => {
    // given
    const array = ['산 : ---', '바다 : -', '강 : -', '하늘 : --'];
    const answer = '산 : ---\n바다 : -\n강 : -\n하늘 : --\n';
    const logSpy = getLogSpy();

    // when
    Lap.printStage(array);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(answer));
  });
});

describe('story5. 최종 우승자 출력', () => {
  test("'-'의 인덱스 값 확인", () => {
    // given
    const input = '산 : -----';
    const result = input.lastIndexOf('-') - input.indexOf('-') + 1;

    // then
    expect(result).toEqual(5);
  });

  test("결과 문자열에서 ':' 을 찾고, 그 앞에 인덱스를 반환한다.", () => {
    // given
    const input = '산 : -----';
    const result = input.indexOf(':') - 1;

    // then
    expect(result).toEqual(1);
  });

  test("자동차 이름을 찾아서 값을 리턴한다.", () => {
    // gven
    const input = ['산 : -----', '바 다 : ---', '  호랑이 : ----'];
    const result = [];
    const answer = ['산', '바 다', '  호랑이'];

    // when
    input.forEach((record) => {
      const index = record.indexOf(':') - 1;
      result.push(record.substring(0, index));
    });

    // then
    expect(result).toEqual(answer);
  });

  test("printResult 테스트, 우승자를 찾고 출력한다.", () => {
    // given
    const input = ['산 : -----', '바 다 : ---', '  호랑이 : ----'];
    const answer = '최종 우승자 : 산';
    const logSpy = getLogSpy();

    // when
    printResult(input, 5);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(answer));
  });

  test("printResult 테스트, 우승자가 없다면 우승자 ", () => {
    // given
    const input = ['산 : ----', '바 다 : ---', '  호랑이 : ----'];
    const answer = '최종 우승자 : 없음';
    const logSpy = getLogSpy();

    // when
    printResult(input, 5);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(answer));
  });
});
