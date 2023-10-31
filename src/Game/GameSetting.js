import message from "../Message.js";

const gameSetting = (cars, loser)=>{
  const users = cars.split(',');
  const carsScores = [];
  let obj = users.reduce(function(acc, item) {
    acc[item] = acc[item] || []
    acc[item].push(item)
    return acc;
  }, {})
  Object.values(obj).forEach(function(arr) {
<<<<<<< HEAD
    if (arr.length == 1) loser.push(arr[0]);
    else {
=======
    if (arr.length == 1) {
      loser.push(arr[0]);
    }else {
>>>>>>> 50ccfde922b4411a40ca042db9bf87687c5c5a98
      for (let i = 0; i < arr.length; i++) {
        arr[i] += "(" + i + ")";
        loser.push(arr[i])
      }
    }
    console.log("arr test "+arr);
  })
  for (let i = 0; i < loser.length; i++) {
    if(users[i].length>5) throw new Error(message.error.NAME_CREATION_ERROR);
    else carsScores.push([loser[i],0]);
  }
  console.log(loser);
  console.log(carsScores);
  return carsScores;
}
export default gameSetting;

