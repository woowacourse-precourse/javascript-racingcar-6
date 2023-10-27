import {Random, Console} from '@woowacourse/mission-utils'

class App {
	async play() {}
}

export default App;

class CustomError extends Error {
	constructor(value, ...params) {
		super(...params);
		this.message = [...params];
		this.name = value;
	}
}
