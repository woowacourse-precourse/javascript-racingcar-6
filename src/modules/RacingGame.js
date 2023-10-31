import CarMoving from "./CarMoving.js";

class RacingGame {
  constructor() {
    this.moving = new CarMoving();
    this.memberList = {};
    this.attempt = 0;
    this.winningScore = 0;
  }

  getParticipant(input) {
    this.makeMemberList(input.split(","));
  }

  getAttempt(input) {
    this.attempt = input;
  }

  makeMemberList(participants) {
    participants.forEach((participant) => {
      this.memberList[participant] = 0;
    });
  }

  isPlaying() {
    Object.keys(this.memberList).forEach((member) => {
      if (this.moving.isMove()) {
        this.memberList[member] += 1;
        this.winningScore = Math.max(
          this.winningScore,
          this.memberList[member]
        );
      }
    });
    this.inProgress();
    return [this.memberList, this.theEnd()];
  }

  inProgress() {
    this.attempt -= 1;
  }

  theEnd() {
    return this.attempt === 0;
  }

  gameFinish() {
    const winner = [];
    Object.keys(this.memberList).forEach((member) => {
      if (this.winningScore === this.memberList[member]) winner.push(member);
    });
    return winner;
  }
}

export default RacingGame;
