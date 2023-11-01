const GAME_END_MESSAGE = '최종 우승자 : ';

const DivideCarName = [
    { input: "pobi,woni", expected: ["pobi", "woni"] },
    { input: "alice,bob", expected: ["alice", "bob"] },
    { input: "123", expected: ["123"] },
    { input: "", expected: [""] }
];

const TransDistanceToHyphen = [
    { input: 3, expected: "---" },
    { input: 0, expected: "" },
    { input: 7, expected: "-------" },
    { input: 1.2, expected: "-" },
    { input: undefined, expected: "" },
    { input: null, expected: "" },
    { input: 'a', expected: "" },
]

const TransOutputFormDistance = [
    { carName: "3", distance: "---" },
    { carName: 0, distance: "" },
    { carName: 7, distance: "-------" },
    { carName: 1.2, distance: "-" },
    { carName: undefined, distance: "" },
    { carName: null, distance: "" },
    { carName: 'a', distance: "" },
]

const TransOutputFormWinner = [
    {input: ["test1", "test2", "test3"], expected: "test1, test2, test3"}, 
    {input: ["a", "b", "c"], expected: "a, b, c"},
    {input: ["123", "", null], expected: "test1, test2, test3"},
]


const InOutputView = [
    { input: 3, distance: "---" },
    { input: 0, distance: "" },
	{ input: "1", distance: "1" },
	{ input: "2", distance: "2" },
	{ input: "abc", distance: "abc" },
	{ input: undefined , distance: undefined },
	{ input: "", distance: "" }
];


export default {
    DivideCarName,
    TransDistanceToHyphen,
    TransOutputFormDistance,
    TransOutputFormWinner,
    InOutputView,
    GAME_END_MESSAGE,
};