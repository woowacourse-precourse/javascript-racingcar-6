import App from '../src/App';

describe('자동차 이름 테스트', () => {
  test('5자를 초과하는 자동차 이름이 있을 때', () => {
    const input = 'yujinCar,car';

    expect(() =>
      App.isVaildCarList(input, input.split(',')).toThrow(
        '[ERROR] 자동차 이름은 최대 5자까지 가능합니다!',
      ),
    );
  });

  test('1자 미만의 자동차 이름이 있을 때', () => {
    const input = ',car';

    expect(() =>
      App.isVaildCarList(input, input.split(',')).toThrow(
        '[ERROR] 자동차 이름은 최소 1자 이상 적어주세요!',
      ),
    );
  });

  test('중복된 자동차 이름이 있을 때', () => {
    const input = 'car,car';

    expect(() =>
      App.isVaildCarList(input, input.split(',')).toThrow(
        '[ERROR] 자동차 이름은 중복될 수 없습니다!',
      ),
    );
  });

  test('자동차 이름이 1개일 때', () => {
    const input = 'car';

    expect(() =>
      App.isVaildCarList(input, input.split(',')).toThrow(
        '[ERROR] 참여자가 한 명뿐이라 경주가 열리지 않았습니다..🤔',
      ),
    );
  });
});
