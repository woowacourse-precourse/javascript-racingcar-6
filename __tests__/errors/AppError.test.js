import AppError from '../../src/errors/AppError';

describe('AppError 테스트', () => {
  test('생성된 인스턴스가 AppError class의 인스턴스인지 확인', () => {
    // when
    const appError = new AppError();

    // then
    expect(appError).toBeInstanceOf(AppError);
    expect(appError).toBeInstanceOf(Error); // 기본 Error 클래스를 상속했기 때문에
  });

  test('메시지가 생성되었는지 확인', () => {
    // given
    const errorMessage = '테스트 에러 메시지';

    // when
    const appError = new AppError(errorMessage);

    // then
    expect(appError).toBeInstanceOf(AppError);
    expect(appError.message).toBe(`[ERROR] : ${errorMessage}`);
  });

  test(`static 속성인 PREFIX ${AppError.PREFIX} 가 생성되었는지 확인`, () => {
    // when - then
    expect(AppError.PREFIX).toBe('[ERROR]');
  });
});
