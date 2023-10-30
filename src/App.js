import IOManager from './Utils/IOManager.js';
import Validator from './Utils/Validator.js';

class App {
	async play() {
		const racingCars = await IOManager.getUserInput(
			'경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
			Validator.checkAllCarNameValidate,
		);
	}
}

export default App;
