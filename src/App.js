import Init from "./game/init.js";

class App {
    async play() {
        const init = new Init();
        await init.getUserInput();
    }
}

export default App;
