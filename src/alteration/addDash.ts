import { getRandomIntInclusive } from "./util";

export const addDash = (word: string) => {
  const pos = getRandomIntInclusive(1, word.length - 1);
  const altered = [word.slice(0, pos - 1), "-", word.slice(pos)].join("");
  return altered;
};
