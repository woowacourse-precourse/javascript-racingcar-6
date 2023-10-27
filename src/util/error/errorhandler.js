import { MissionUtils } from '@woowacourse/mission-utils';

function errorhandler(code) {
  const errorCode = [
    {
      code: 'noRacerName',
      messege: '이름이 없는 자동차가 존재합니다.',
    },
    {
      code: 'tooLongRacerName',
      messege: '자동차의 이름이 너무 깁니다.',
    },
    {
      code: 'inputIsNotNumber',
      messege: '숫자가 잘못된 형식입니다.',
    },
    {
      code: 'inputIsZero',
      messege: '0은 입력할 수 없습니다.',
    },
  ];

  const occuredError = errorCode.find((error) => error.code === code);

  const errorMessage = occuredError ? occuredError.messege : '예상치 못한 에러가 발생했습니다.';

  const result = new Error(errorMessage);

  MissionUtils.Console.print(`[ERROR] ${errorMessage}`);

  return Promise.reject(result);
}

export default errorhandler;

// {
//   code: '',
//   messege: '',
// }
