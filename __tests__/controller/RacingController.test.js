import RacingController from "../../src/controller/RacingController.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { DuplicatedError, RacingCarNameError, RetryCountError } from "../../src/error/CustomErrors";

const mockInputs = (inputs) => {
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

const spy = jest.spyOn(MissionUtils.Console, 'print');

describe('RacingController test', () => {
  test('controller 정상 동작 확인', async () => {
    const inputs = ['kim,park', '2'];
    const randoms = [1, 8, 3, 5];
    const outputs = ['park : --', '최종 우승자 : park'];

    mockInputs(inputs);
    mockRandoms(randoms);

    const controller = new RacingController();
    await controller.run();

    outputs.forEach((output) => {
      expect(spy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('controller 공동 우승 확인', async () => {
    const inputs = ['kim,park', '2'];
    const randoms = [4, 8, 5, 5];
    const outputs = ['kim : --', 'park : --', '최종 우승자 : kim, park'];

    mockInputs(inputs);
    mockRandoms(randoms);

    const controller = new RacingController();
    await controller.run();

    outputs.forEach((output) => {
      expect(spy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('controller 모두 거리 0인 경우 공동 우승 확인', async () => {
    const inputs = ['kim,park', '2'];
    const randoms = [1, 1, 2, 3];
    const outputs = ['kim : ', 'park : ', '최종 우승자 : kim, park'];

    mockInputs(inputs);
    mockRandoms(randoms);

    const controller = new RacingController();
    await controller.run();

    outputs.forEach((output) => {
      expect(spy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('controller 이름 형식 입력 오류', async () => {
    const inputs = ['kim,박', '2'];

    mockInputs(inputs);

    const controller = new RacingController();
    const result = async () => await controller.run();

    await expect(result).rejects.toThrowError(RacingCarNameError);
  });

  test('controller 이름 중복 입력 오류', async () => {
    const inputs = ['kim,kim', '2'];

    mockInputs(inputs);

    const controller = new RacingController();
    const result = async () => await controller.run();

    await expect(result).rejects.toThrowError(DuplicatedError);
  });

  test.each([
    [['kim,park', '0']],
    [['kim,park', '다섯번']],
    [['kim,park', 'five']],
  ])('controller 시도 횟수 입력 오류', async (inputs) => {
    mockInputs(inputs);

    const controller = new RacingController();
    const result = async () => await controller.run();

    await expect(result).rejects.toThrowError(RetryCountError);
  });
});
