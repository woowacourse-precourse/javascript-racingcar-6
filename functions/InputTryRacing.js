import {Console} from '@woowacourse/mission-utils';

async function inputTryRacing(){
    const tryRacing = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    if(isNaN(tryRacing)){
        throw new Error('[ERROR] 숫자가 아닙니다.');
    }

    return tryRacing
}

export default inputTryRacing;