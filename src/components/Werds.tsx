import { useState } from "react";

export const Werds = () => {
  const [results, setResults] = useState([]);
  const [working, setWorking] = useState(false);
  const [removeCharacters, setRemoveCharacters] = useState(true);
  const [changeCharacters, setChangeCharacters] = useState(false);

  const getQuery = () => {
    const dict = {
      removeCharacters,
      changeCharacters,
    };
    const keys = Object.keys(dict);
    return keys
      .map((key) => {
        // @ts-expect-error
        const val = dict[key];
        return `${key}=${val.toString()}`;
      })
      .join("&");
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
      <p>
        <button
          className="btn btn-primary"
          onClick={generate}
          disabled={working}
        >
          Make Words
        </button>
        <button
          className="btn btn-light"
          data-bs-toggle="collapse"
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
        </div>
      </div>
      <div>{results.join(", ")}</div>
    </>
  );
};
