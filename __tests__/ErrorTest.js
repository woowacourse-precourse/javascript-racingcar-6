import { occuredErrorhandler } from '../src/util/error/errorhandler';

describe('에러 처리 test', () => {
  test('존재하는 에러코드에 대한 메세지 출력', () => {
    // given
    const code = 'noRacerName';
    const output = '이름이 없는 자동차가 존재합니다.';

    // when
    expect(() => occuredErrorhandler(code).rejects.toThrow(output));
  });

  test('존재하지 않는 에러코드에 대한 메세지 출력', () => {
    // given
    const code = 'testErrorNotDeclared';
    const output = '예상치 못한 에러가 발생했습니다.';

    // when
    expect(() => occuredErrorhandler(code).rejects.toThrow(output));
  });
});
