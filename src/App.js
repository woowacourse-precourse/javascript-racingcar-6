import Print from './Print';

class App {
  async play() {
    const participateCars = await Print.getCarsName();
  }
}

export default App;
