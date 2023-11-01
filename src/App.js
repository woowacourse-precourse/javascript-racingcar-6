import Init from "./Init";

class App {
  async play() {
    const InitSetting = new Init();
    await InitSetting.start();
  }
}

export default App;
