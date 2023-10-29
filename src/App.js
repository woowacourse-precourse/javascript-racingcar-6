import CarRacingReferee from './CarRacingReferee';
const carRacingReferee = new CarRacingReferee();

class App {
  async play() {
    await carRacingReferee.raceStart();
  }
}

export default App;
