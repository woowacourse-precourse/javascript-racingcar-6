import errorMessage from "./Message.js";

const gameSetting = ()=>{
    const carsScores = [];
    for (let i = 0; i < users.length; i++) {
      if(users[i].length>5){
        Console.print(`${users[i]}오류`);
        throw Error(errorMessage.NAME_CREATION_ERROR);
      }else{
        // carsScores.set(users[i],0);
        carsScores.push([users[i],0]);
      }
    } 
}
export default gameSetting;