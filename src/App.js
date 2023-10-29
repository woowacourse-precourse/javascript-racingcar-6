import Print from './Print';

class App {
  async play() {
    const participateCars = await Print.getCarsName();
    const count = await Print.getCount();
  }
}

export default App;
