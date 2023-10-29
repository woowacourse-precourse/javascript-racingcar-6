describe('기능 테스트', () => {
  test('자동차 이름 길이 검증 테스트', () => {
    const inputs = ['Juru99,Juru100', '1'];
    const inputList = inputs[0].split(',');

    inputList.forEach((car) => {
      expect(car.length).toBeGreaterThan(5);
    });
  });
});
