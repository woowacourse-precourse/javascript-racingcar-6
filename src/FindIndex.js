class FindIndex{
    FindArrayIndex(ARR, TARGET_VALUE) {
        const INDEXES = [];
        for(let i = 0; i < ARR.length; i++) {
            if(ARR[i] == TARGET_VALUE) {
                INDEXES.push(i);
            }
        }
        return INDEXES;
    }
}

export default FindIndex;