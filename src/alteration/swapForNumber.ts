import { getRandomIntInclusive } from "./util";

const map = {
  a: [4],
  b: [6],
  c: [0],
  d: [2, 0],
  e: [3],
  f: [4, 8],
  g: [6],
  h: [4],
  i: [1],
  j: [1, 7],
  k: [1, 4],
  l: [1, 7],
  m: [3, 0],
  n: [2],
  o: [0],
  p: [6],
  q: [6],
  r: [7],
  s: [5],
  t: [7],
  u: [6],
  v: [6],
  w: [3],
  x: [0],
  y: [7],
  z: [2],
};

export const swapForNumber = (word: string) => {
  const pos = getRandomIntInclusive(1, word.length - 1);
  const key = word[getRandomIntInclusive(1, word.length - 1)];
  // @ts-expect-error
  const possibles = map[key];
  if (!possibles || possibles.length === 0) {
    return word;
  }
  const replace = possibles[getRandomIntInclusive(0, possibles.length - 1)];
  const altered = [word.slice(0, pos - 1), replace, word.slice(pos)].join("");
  return altered;
};
