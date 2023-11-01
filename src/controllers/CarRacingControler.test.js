import CarRacingController from './CarRacingController';
import { printErrorMessage } from '../utils/messages';

jest.mock('../utils/messages');

describe('CarRacingController', () => {
  let controller;

  beforeEach(() => {
    controller = new CarRacingController();
    printErrorMessage.mockClear();
  });

  describe('입력값 검증', () => {
    test('자동차 입력 중 빈 이름이 있을 때 에러 반환', () => {
      controller.validateNames(['', 'Car2']);
      expect(printErrorMessage).toHaveBeenCalledWith(
        '[ERROR] 자동차 이름을 비워둘 수 없습니다.',
      );
    });

    test('자동차 입력 중 이름이 5글자 이상일 때 에러 반환', () => {
      controller.validateNames(['TooLongName', 'Car2']);
      expect(printErrorMessage).toHaveBeenCalledWith(
        '[ERROR] 5글자 이하의 자동차 이름을 입력해주세요.',
      );
    });

    test('자동차 입력 중 이름이 중복 값일 때 에러 반환', () => {
      controller.validateNames(['Car1', 'Car1']);
      expect(printErrorMessage).toHaveBeenCalledWith(
        '[ERROR] 중복된 자동차 이름을 입력할 수 없습니다.',
      );
    });

    test('라운드 횟수 입력 중 숫자가 아닐 때 에러 반환', () => {
      controller.validateCount('NaN');
      expect(printErrorMessage).toHaveBeenCalledWith(
        '[ERROR] 1 이상의 정수를 입력해주세요.',
      );
    });

    test('라운드 횟수 입력 중 정수가 아닐 때 에러 반환', () => {
      controller.validateCount('1.1');
      expect(printErrorMessage).toHaveBeenCalledWith(
        '[ERROR] 1 이상의 정수를 입력해주세요.',
      );
    });

    test('라운드 횟수 입력 중 0 이하의 숫자일 때 에러', () => {
      controller.validateCount('0');
      expect(printErrorMessage).toHaveBeenCalledWith(
        '[ERROR] 1 이상의 정수를 입력해주세요.',
      );
    });
  });
});
