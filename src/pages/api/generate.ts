import { alterWord } from "@/alteration/alterWord";
import { getRandomIntInclusive } from "@/alteration/util";
import type { NextApiRequest, NextApiResponse } from "next";
import * as wordData from "./../../data/words.json";

const { words } = wordData;

type Data = string[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;

  const options = {
    removeCharacters: query.removeCharacters === "true",
    changeCharacters: query.changeCharacters === "true",
    swapForNumber: query.swapForNumber === "true",
    maxIterations: +(query.maxIterations !== undefined
      ? query.maxIterations
      : 3),
    addDash: query.addDash === "true",
  };

  const maxWordLength = +(query.maxWordLength || 10);
  const count = +(query.count || 100);
  const secondWord = query.secondWord === "true";
  const results = [];

  const filteredWords: string[] = words.filter((w) => w.length < maxWordLength);

  for (let i = 0; i < count; i++) {
    const result =
      secondWord && Math.random() > 0.8
        ? [
            `${alterWord(
              filteredWords[getRandomIntInclusive(0, filteredWords.length - 1)],
              options
            )}`,
            `${alterWord(
              filteredWords[getRandomIntInclusive(0, filteredWords.length - 1)],
              options
            )}`,
          ].join(Math.random() > 0.9 ? "-" : " ")
        : `${alterWord(
            filteredWords[getRandomIntInclusive(0, filteredWords.length - 1)],
            options
          )}`;

    if (result && !words.includes(result)) {
      results.push(result);
    }
  }

  res.status(200).json(results);
}
