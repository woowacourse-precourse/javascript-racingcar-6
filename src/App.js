class App {
  async play() {
    function go_randomly(scores){
      let random_number;
      for (let i=0;i<scores.length;i++){
        random_number= MissionUtils.Random.pickNumberInRange(0, 9);
        // random_number=Math.floor(Math.random() * 10);
        if (random_number>3){ scores[i]=scores[i]+1; }
      }
      return scores;
    }
  }
}

export default App;
