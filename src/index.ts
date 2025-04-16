import longestCommonPrefix from "./longest_common_prefix/inde";

const testCases = [
    { input: ["flower", "flow", "flight"], expected: "fl" },
    { input: ["dog", "racecar", "car"], expected: "" },
    { input: ["a"], expected: "a" },
    { input: [], expected: "" },
    { input: ["ab", "a"], expected: "a" },
];
testCases.forEach(({ input, expected }, index) => {
    const result = longestCommonPrefix(input);
    if (result === expected) {
        console.log(`Test case ${index + 1} passed.`);
    } else {
        console.error(`Test case ${index + 1} failed. Expected ${expected}, but got ${result}.`);
    }
}
);