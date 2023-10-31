import pickZeroToNine from "./pickZeroToNine.js";

function carAdvanceCount(score) {
    const zeroToNine = pickZeroToNine();
    if (zeroToNine >= 4) {
        score = score + "-";
    }
    return score;
}

export default carAdvanceCount;