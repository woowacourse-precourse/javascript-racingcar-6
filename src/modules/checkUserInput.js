export const checkNames = async function checkNamesInputValidity(userInput) {
  try {
    const regex = /^[\w]{1,5}(,[\w]{1,5})*$/;
    if (!regex.test(userInput)) {
      throw new Error('[ERROR] 잘못된 Names 입력입니다.');
    }
    return;
  } catch (error) {
    throw error;
  }
};

export const checkRounds = async function checkRoundsInputValidity(userInput) {
  try {
    const regex = /^[0-9]+$/;
    if (!regex.test(userInput)) {
      throw new Error('[ERROR] 잘못된 Rounds 입력입니다.');
    }
    return;
  } catch (error) {
    throw error;
  }
};
