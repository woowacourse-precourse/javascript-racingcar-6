export const carNameCheck = async (carsArray) => {
  carsArray.forEach((e) => {
    if (e.length > 5 || carsArray.includes(e)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
    }
  })
}