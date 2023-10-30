import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async play() {}

    /**
     * @returns {Promise<string>}
     */
    async getInputNames() {
        return await MissionUtils.Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        );
    }

    /**
     * @param {string} nameStr
     * @returns {string[]}
     */
    getSplittedName(nameStr) {
        return nameStr.split(',');
    }
}

export default App;
