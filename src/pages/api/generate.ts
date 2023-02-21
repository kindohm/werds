import type { NextApiRequest, NextApiResponse } from "next";
import { words } from "./../../data/words.json";

type Data = string[];
type Options = {
  removeCharacters: boolean;
  changeCharacters: boolean;
};

const filteredWords: string[] = words.filter((w) => w.length < 8);

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const alterWord = (word: string, options: Options) => {
  const times = getRandomIntInclusive(1, 4);

  let altered = word;

  for (let i = 0; i < times; i++) {
    const pos = getRandomIntInclusive(1, word.length - 1);
    altered = word.slice(0, pos - 1) + word.slice(pos);
  }

  return `${altered}`;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;

  const options: Options = {
    removeCharacters: query.removeCharacters === "true",
    changeCharacters: query.changeCharacters === "true",
  };

  const count = 500;
  const results = [];
  for (let i = 0; i < count; i++) {
    const result = alterWord(
      filteredWords[getRandomIntInclusive(0, filteredWords.length - 1)],
      options
    );

    if (!words.includes(result)) {
      results.push(result);
    }
  }

  res.status(200).json(results);
}
