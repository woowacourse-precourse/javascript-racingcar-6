export const GameRule = {
  MinNumberOfCar: 2,
  MinLengthOfCarName: 1,
  MaxLengthOfCarName: 5,
  MinRound: 1,
};

export const GameMessage = {
  InputCarName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  InputRound: '시도할 횟수는 몇 회인가요?',
};

export const ErrorMessage = {
  CarName: '[ERROR] 이름을 다시 확인해주세요.',
  Round: `[ERROR] 횟수를 다시 확인해주세요. ${GameRule.MinRound} 이상, 정수만 허용됩니다.`,
};
