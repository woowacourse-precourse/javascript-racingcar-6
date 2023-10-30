import message from "../Message.js";

const gameSetting = (users,carsScores)=>{
  for (let i = 0; i < users.length; i++) {
    if(users[i].length>5) throw new Error(message.error.NAME_CREATION_ERROR);
    else carsScores.push([users[i],0]);
  }
  return carsScores;
}
export default gameSetting;

