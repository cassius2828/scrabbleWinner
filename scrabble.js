const scrabbleWinner = (s1, s2) => {
  let count1 = 0;
  let count2 = 0;
  const regex = /\W|_/g;

  // array with letter to number values
  const POINTS = [
    ["a", 1],
    ["b", 3],
    ["c", 3],
    ["d", 2],
    ["e", 1],
    ["f", 4],
    ["g", 2],
    ["h", 4],
    ["i", 1],
    ["j", 8],
    ["k", 5],
    ["l", 1],
    ["m", 3],
    ["n", 1],
    ["o", 1],
    ["p", 3],
    ["q", 10],
    ["r", 1],
    ["s", 1],
    ["t", 1],
    ["u", 1],
    ["v", 4],
    ["w", 4],
    ["x", 8],
    ["y", 4],
    ["z", 10],
  ];

  // calculate score for string 1
  s1 = s1.toLowerCase();

  if (s1.search(regex) > 0) {
    return "Player 1, please enter a valid word \n (no special characters or numbers)";
  }

  for (let i = 0; i < s1.length; i++) {
    POINTS.map((char) => {
      if (char[0] === s1[i]) {
        count1 += char[1];
      }
    });
  }

  // calculate score for string 2
  s2 = s2.toLowerCase();

  if (s2.search(regex) > 0) {
    return "Player 2, please enter a valid word \n (no special characters or numbers)";
  }

  for (let i = 0; i < s2.length; i++) {
    POINTS.map((char) => {
      if (char[0] === s2[i]) {
        count2 += char[1];
      }
    });
  }

  // if else statements to decide who wins the game
  if (count1 > count2) {
    return "Player 1 Wins!";
  } else if (count1 < count2) {
    return "Player 2 Wins!";
  } else {
    return "It is a Tie!";
  }
};

console.log(scrabbleWinner("aBsoLutely", "positively"));
