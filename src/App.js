import { useState } from "react";
import "./App.css";

const customDictionary = {
  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example",
};

function App() {
  const [text, setText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);

    const words = text.split(" ");
    const correctedwords = words.map((word) => {
      const correctedword = customDictionary[word.toLowerCase()];
      return correctedword || word;
    });

    const correctedsentance = correctedwords.join(" ");

    const firstCorrection = correctedwords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(firstCorrection || "");
  };

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      ></textarea>
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}?</strong>
        </p>
      )}
    </div>
  );
}

export default App;
