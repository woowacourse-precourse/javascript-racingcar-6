class FindIndex{
  indexes = [];
  findArrayIndex(arr, targetValue) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == targetValue) {
        this.indexes.push(i);
      }
    }
    return this;
  }
}

export default FindIndex;