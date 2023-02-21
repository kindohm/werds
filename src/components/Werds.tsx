import { useState } from "react";

export const Werds = () => {
  const [results, setResults] = useState([]);
  const [working, setWorking] = useState(false);

  const generate = async () => {
    setWorking(true);

    try {
      const response = await fetch("/api/generate");
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
      </p>
      <div>{results.join(", ")}</div>
    </>
  );
};
