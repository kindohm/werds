import { useState } from "react";

export const Werds = () => {
  const [results, setResults] = useState([]);
  const [working, setWorking] = useState(false);
  const [removeCharacters, setRemoveCharacters] = useState(true);
  const [changeCharacters, setChangeCharacters] = useState(true);
  const [swapForNumber, setSwapForNumber] = useState(true);
  const [addDash, setAddDash] = useState(true);
  const [maxIterations, setMaxIterations] = useState(1);
  const [count, setCount] = useState(200);
  const [formatAsList, setFormatAsList] = useState(false);
  const [secondWord, setSecondWord] = useState(true);
  const [maxWordLength, setMaxWordLength] = useState(6);

  const getQuery = () => {
    const query = [
      `removeCharacters=${removeCharacters}`,
      `changeCharacters=${changeCharacters}`,
      `maxIterations=${maxIterations}`,
      `swapForNumber=${swapForNumber}`,
      `addDash=${addDash}`,
      `count=${count}`,
      `secondWord=${secondWord}`,
      `maxWordLength=${maxWordLength}`,
    ];

    return query.join("&");
  };

  const generate = async () => {
    setWorking(true);

    try {
      const route = "/api/generate";
      const query = getQuery();
      const response = await fetch(`${route}?${query}`);
      const data = await response.json();
      setResults(data);
    } finally {
      setWorking(false);
    }
  };

  return (
    <>
      <h1>Werds.</h1>
      <p>
        <button
          className="btn btn-primary btn-lg"
          onClick={generate}
          disabled={working}
        >
          Generate
        </button>
        <button
          className="btn btn-light btn-lg mx-3"
          data-bs-toggle="collapse"
          // @ts-expect-error
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Options
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div className="mb-3">
            <label className="form-label">Count</label>
            <input
              type="number"
              min={1}
              max={500}
              step={1}
              className="form-control"
              value={count}
              onChange={(e) => setCount(+e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Max Iterations</label>
            <input
              type="number"
              min={0}
              max={10}
              step={1}
              className="form-control"
              value={maxIterations}
              onChange={(e) => setMaxIterations(+e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Max Word Length</label>
            <input
              type="number"
              min={1}
              max={20}
              step={1}
              className="form-control"
              value={maxWordLength}
              onChange={(e) => setMaxWordLength(+e.target.value)}
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="removeCharacters"
              checked={removeCharacters}
              onChange={(e) => setRemoveCharacters(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="removeCharacters">
              remove characters
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="changeCharacters"
              checked={changeCharacters}
              onChange={(e) => setChangeCharacters(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="changeCharacters">
              change characters
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="swapForNumber"
              checked={swapForNumber}
              onChange={(e) => setSwapForNumber(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="swapForNumber">
              swap for number
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="addDash"
              checked={addDash}
              onChange={(e) => setAddDash(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="addDash">
              add dash
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="secondWord"
              checked={secondWord}
              onChange={(e) => setSecondWord(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="secondWord">
              add a 2nd word
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formatAsList"
              checked={formatAsList}
              onChange={(e) => setFormatAsList(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="formatAsList">
              format as list
            </label>
          </div>
        </div>
      </div>
      <div className="my-3 lead">
        {formatAsList ? (
          <ol>
            {results.map((result) => {
              return <li key={result}>{result}</li>;
            })}
          </ol>
        ) : (
          <div>{results.join(", ")}</div>
        )}
      </div>
    </>
  );
};
