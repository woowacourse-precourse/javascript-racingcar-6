import {Console} from '@woowacourse/mission-utils';
class App {
  async play() {
    let carNameInput = document.createElement('input');

    carNameInput.addEventListener('click', updateName);

    function updateName(){
      let carNaming='';
      carNaming=carNameInput.value;
      return carNaming;
    }

    let advanceNum=document.createElement('input');

    advanceNum.addEventListener('click', advanceOrStop);

    function advanceOrStop(){
      let count=0;
      count=advanceNum.value;
      return count;
    }

    function checkor(countNum){
      let count=count;
      let countNum = 4;
      if(countNum =< count){
        Console.print(count)
      }
    }

    function getError(carNaming, advanceNum){
      if (carNaming !== string) {
        throw new Error('Parameter is not a string!');
      }else if(countNum !== number){
        throw new Error('Parameter is not a number!');
      }
    }
  }
}

export default App;
