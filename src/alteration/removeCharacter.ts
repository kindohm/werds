import { getRandomIntInclusive } from "./util";

export const removeCharacter = (word: string) => {
  const pos = getRandomIntInclusive(1, word.length - 1);
  return word.slice(0, pos - 1) + word.slice(pos);
};
