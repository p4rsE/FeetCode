// 30. Substring with Concatenation of All Words
// Hard
// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
// Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.


// TESt 1
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
// The output order does not matter. Returning [9,0] is fine too.
// TESt 1
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : [arr];
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};
function findSubstring (s="",words=[]) {
	try {
		const wordLength = words.length
		const p = permutations(words)
		console.log({permutations:p});
		const l = p.length
		const f = []
		for (let i = 0; i < l; i++) {
			const joined = p[i].join("")
			{joined}
			const index = s.indexOf(joined)
			const last = s.lastIndexOf(joined)
			if (index>-1 && f.indexOf(index) < 0)f.push(index)
			if (last>-1 && f.indexOf(last) < 0)f.push(last)
		}
		return f
	} catch(e) {}
	return []
}

console.log(findSubstring("barfoothefoobarman",["foo","bar"]));
console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","good"]));
console.log(findSubstring("foobarfoobar",["foo","bar"]));
console.log(findSubstring("a",["a"]));
console.log(findSubstring("aaaaaaaaaaaaaa",["aa","aa"]));


function findSubstringV2(s="",words=[]){
	try {
		const p = permutations(words)
		for (let i = 0; i < p.length; i++) {
			const joined = p[i].join("")
			for (let j = 0; j < s.length; j++) {
			}
		}
	} catch(e) {
		// statements
		console.log(e);
	}
}

// console.log(findSubstringV2("aaaaaaaaaaaaaa",["aa","aa"]));
console.log(findSubstring("bbaabbaabb",["bb"]));//[0,4,8]
console.log(findSubstringV2("bbaabbaabba",["bba"]));//[0,4,8]



