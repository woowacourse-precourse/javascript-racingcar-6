import racingcarView from "../View/racingcarView.js";
import racingcarModel from "../Model/racingcarModel.js";
import validate from "../Util/validation.js";

class racingcarControll {
	
	constructor() {
		
	}

	async start() {
		const names = await racingcarView.getUserInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
		const nameArray = names.split(',');
		nameArray.forEach((name) => {
			validate.isAlphabet(name);
			validate.lessThan(5, name, `[ERROR] 자동차 이름은 5자 이하만 가능합니다.`);
		});
		const count = await racingcarView.getUserInput('시도할 횟수는 몇 회인가요?\n');
		validate.isNumber(count);
		this._racingcar = new racingcarModel(nameArray);
	}

}

export default racingcarControll