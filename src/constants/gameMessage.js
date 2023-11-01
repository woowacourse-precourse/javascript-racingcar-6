const GAME_MESSAGE = {
  get_car_name: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  get_trial_num: '시도할 횟수는 몇 회인가요?\n',
  line_break: '\n',
  print_start_result: '실행 결과',
  print_move_status: (car, moveStatus) => `${car} : ${'-'.repeat(moveStatus)}`,
  print_winners: (winners) => `최종 우승자 : ${winners.join(', ')}`,
};

export default GAME_MESSAGE;
