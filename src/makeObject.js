const makeObject = (PARTICIPANTS, player) => {
  PARTICIPANTS.map((participant) => {
    if (participant.length != 0) {
      player[participant] = "";
    }
  });
};
export default makeObject;
