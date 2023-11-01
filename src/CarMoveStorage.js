export const carMoveStorage = {
  carNameSave(carnames) {
    for (let i = 0; i < carnames.length; i++) {
      carMoveStorage[carnames[i]] = "";
    }
  }
}