export const carNameCheck = async (carsArray) => {
  console.log("carsArray", carsArray);
  carsArray.forEach((e, index) => {
    console.log("e", e);
    if (e.length > 5 || carsArray.lastIndexOf(e)!==index) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
    }
  })
}