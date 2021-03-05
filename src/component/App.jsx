import react, { useState } from "react";
import reactDOM from "react-dom";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [isMousedeOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }
  return (
    <div className="container">
      <form>
        <h1>Hello{headingText}</h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          value={name}
        />
        <button
          style={{ backgroundColor: isMousedeOver ? "yellow" : "red" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default App;
