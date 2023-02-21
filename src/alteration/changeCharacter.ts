import { getRandomIntInclusive } from "./util";

const chars = "abcdefghijklmnopqrstuvwxyz";

export const changeCharacter = (word: string) => {
  const pos = getRandomIntInclusive(1, word.length - 1);
  const altered = [
    word.slice(0, pos - 1),
    chars[getRandomIntInclusive(0, chars.length - 1)],
    word.slice(pos),
  ].join("");
  return altered;
};
