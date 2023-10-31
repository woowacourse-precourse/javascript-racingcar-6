import { SYSTEM_CONFIG } from './system.js';

const MESSAGES = {
  start: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${SYSTEM_CONFIG.separator}) 기준으로 구분)\n`,
  lap: '시도할 횟수는 몇 회인가요?\n',
  record(name, skid) {
    return `${name} : ${skid}`;
  },
  winners(names) {
    return `최종 우승자 : ${names.join(',')}`;
  },
};

export default MESSAGES;
