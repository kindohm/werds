import { addDash } from "./addDash";
import { changeCharacter } from "./changeCharacter";
import { Operation } from "./operation";
import { removeCharacter } from "./removeCharacter";
import { swapForNumber } from "./swapForNumber";
import { getRandomIntInclusive } from "./util";

type Options = {
  removeCharacters: boolean;
  changeCharacters: boolean;
  swapForNumber: boolean;
  maxIterations: number;
  addDash: boolean;
};

const getOperations = (options: Options): Operation[] => {
  const ops: Operation[] = [];

  options.removeCharacters && ops.push(removeCharacter);
  options.removeCharacters && ops.push(removeCharacter);
  options.removeCharacters && ops.push(removeCharacter);
  options.removeCharacters && ops.push(removeCharacter);
  options.removeCharacters && ops.push(removeCharacter);

  options.changeCharacters && ops.push(changeCharacter);
  options.changeCharacters && ops.push(changeCharacter);
  options.changeCharacters && ops.push(changeCharacter);
  options.changeCharacters && ops.push(changeCharacter);

  options.swapForNumber && ops.push(swapForNumber);

  options.addDash && ops.push(addDash);

  return ops;
};

export const alterWord = (word: string, options: Options) => {
  const times =
    options.maxIterations === 0
      ? 0
      : getRandomIntInclusive(1, options.maxIterations);
  const ops = getOperations(options);

  let altered = word;

  for (let i = 0; i < times; i++) {
    altered = ops[getRandomIntInclusive(0, ops.length - 1)](altered);
  }

  return altered;
};
