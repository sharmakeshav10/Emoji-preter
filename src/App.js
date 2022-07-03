import "./styles.css";
import React, { useState } from "react";

const emojiDict = {
  "😀": "Grinning Face",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face",
  "😡": "Enraged Face",
  "❤️": "love",
  "🤡": "Clown Face",
  "🤓": "Nerd Face",
  "🤩": "Star-Struck",
  "👏": "Clapping Hands",
  "🙏": "Folded Hands",
  "😪": "Sleepy"
};

const emojis = Object.keys(emojiDict);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Improve your emoji knowledge");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDict) {
      setMeaning(emojiDict[inputEmoji]);
    } else {
      setMeaning("Can't recognize the emoji!");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDict[inputEmoji]);
  }

  return (
    <div className="App">
      <h1 style={{ marginTop: "3rem" }}>Let's crack emojis</h1>
      <input onChange={changeHandler} placeholder={"Type your emoji here..."} />
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", cursor: "pointer", margin: "0.3rem" }}
        >
          {" "}
          {emoji}
        </span>
      ))}
    </div>
  );
}
