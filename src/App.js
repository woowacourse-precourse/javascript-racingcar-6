import GameManger from "./GameManger";
class App {
    async play() {
        const gameManager = new GameManger();
        await gameManager.play();
    }
}

export default App;
