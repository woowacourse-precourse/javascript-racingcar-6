import CarName from './controller/carNameController.js';

class App {
   async play(){
       await new CarName().start();
   }
}

export default App;
