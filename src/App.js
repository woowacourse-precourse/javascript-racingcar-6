import RacingController from "./controller/Racing.js";
class App {
  async play() {
    try {
      const controller = new RacingController();
      await controller.run();
    } catch (error) {
      throw error;
    }
  }
}
export default App;
