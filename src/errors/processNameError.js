const processNameError = (PARTICIPANTS) => {
  PARTICIPANTS.map((participant) => {
    if (participant.length > 5) {
      throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
    }
  });
};

export default processNameError;
