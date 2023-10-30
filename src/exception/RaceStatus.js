class RaceStatus {
  static reportTrackIssue(lap) {
    if (lap.length === 0) {
      throw new Error(
        "[ERROR] 트랙에 문제가 발생해 경기에 차질이 생겼습니다. 트랙을 확인해주세요.",
      );
    }
  }
}

export default RaceStatus;
