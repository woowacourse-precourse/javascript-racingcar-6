import { getCarNames } from './getCarNamesAndCount';

class App {
  async play() {
    await getCarNames();
  }
}

export default App;
