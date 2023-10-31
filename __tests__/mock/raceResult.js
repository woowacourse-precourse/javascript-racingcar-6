const mockRaceResult = [
  {
    raceResult: [
      [
        { name: 'pobi', position: 0 },
        { name: 'crong', position: 0 },
        { name: 'honux', position: 1 },
      ],
    ],
    winner: ['honux'],
    expected: `\n실행 결과\npobi : \ncrong : \nhonux : -\n`,
  },
  {
    raceResult: [
      [
        { name: 'pobi', position: 1 },
        { name: 'crong', position: 1 },
        { name: 'honux', position: 1 },
      ],
      [
        { name: 'pobi', position: 1 },
        { name: 'crong', position: 2 },
        { name: 'honux', position: 1 },
      ],
    ],
    winner: ['crong'],
    expected: `\n실행 결과\npobi : -\ncrong : -\nhonux : -\n\npobi : -\ncrong : --\nhonux : -\n`,
  },
  {
    raceResult: [
      [
        { name: 'pobi', position: 0 },
        { name: 'crong', position: 1 },
        { name: 'honux', position: 0 },
      ],
      [
        { name: 'pobi', position: 1 },
        { name: 'crong', position: 2 },
        { name: 'honux', position: 0 },
      ],
      [
        { name: 'pobi', position: 2 },
        { name: 'crong', position: 3 },
        { name: 'honux', position: 1 },
      ],
    ],
    winner: ['crong'],
    expected: `\n실행 결과\npobi : \ncrong : -\nhonux : \n\npobi : -\ncrong : --\nhonux : \n\npobi : --\ncrong : ---\nhonux : -\n`,
  },
];

export default mockRaceResult;
