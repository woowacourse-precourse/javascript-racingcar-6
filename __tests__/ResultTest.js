import Result from '../src/Model/Result'
import Car from '../src/Model/Car';

describe('Result 단위 테스트', () => {
  test('isCarWinner 메서드를 이용하여 세 개의 자동차들 중 전진 거리가 제일 길면 true값 반환', () => {
    const result = new Result();
    const cars = [new Car('mike'), new Car('paul'), new Car('joseph')];

    Array.from({ length: 2 }, (_) => {
      cars[0].runForward();
    });
    Array.from({ length: 3 }, (_) => {
      cars[1].runForward();
    });
    Array.from({ length: 2 }, (_) => {
      cars[2].runForward();
    });
    result.getWinners(cars);

    expect(result.isCarWinner(cars[1])).toBeTruthy();
  });

  test('isCarWinner 메서드를 이용하여 세 개의 자동차들 중 전진 거리가 제일 길지 않으면 false값 반환', () => {
    const result = new Result();
    const cars = [new Car('mike'), new Car('paul'), new Car('joseph')];

    Array.from({ length: 2 }, (_) => {
      cars[0].runForward();
    });
    Array.from({ length: 3 }, (_) => {
      cars[1].runForward();
    });
    Array.from({ length: 2 }, (_) => {
      cars[2].runForward();
    });
    result.getWinners(cars);

    expect(result.isCarWinner(cars[2])).toBeFalsy();
  });

  test('getDistances 메서드로 전진 거리의 배열을 반환', () => {
    const result = new Result();
    const cars = [new Car('mike'), new Car('paul'), new Car('joseph')];

    Array.from({ length: 2 }, (_) => {
      cars[0].runForward();
    });
    Array.from({ length: 3 }, (_) => {
      cars[1].runForward();
    });
    Array.from({ length: 2 }, (_) => {
      cars[2].runForward();
    });

    expect(result.getDistances(cars)).toEqual([2, 3, 2]);
  });

  test('getLongestDistance 메서드로 제일 긴 전진 거리를 반환', () => {
    const result = new Result();
    const cars = [new Car('mike'), new Car('paul'), new Car('joseph')];

    Array.from({ length: 2 }, (_) => {
      cars[0].runForward();
    });
    Array.from({ length: 3 }, (_) => {
      cars[1].runForward();
    });
    Array.from({ length: 2 }, (_) => {
      cars[2].runForward();
    });

    expect(result.getLongestDistance(cars)).toEqual(3);
  });

  test('getWinners 메서드로 최종 우승자 반환', () => {
    const result = new Result();
    const cars = [new Car('mike'), new Car('paul'), new Car('joseph')];

    Array.from({ length: 2 }, (_) => {
      cars[0].runForward();
    });
    Array.from({ length: 3 }, (_) => {
      cars[1].runForward();
    });
    Array.from({ length: 2 }, (_) => {
      cars[2].runForward();
    });

    expect(result.getWinners(cars)).toEqual(['paul']);
  });
});