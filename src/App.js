import Race from './Controller/Race'

const race = new Race()

class App {
    async play() {
        await race.startRace()
    }
}

export default App;
