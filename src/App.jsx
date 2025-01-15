import { useState } from "react";
import { initialColors } from "./lib/colors";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleSubmit(data) {
    setColors((prevColors) => [data, ...prevColors]);
  }
  function handleDeleteColor(id) {
    const colorsToKeep = colors.filter((color) => color.id !== id);
    setColors(colorsToKeep);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmit} />
      {colors.length > 0 ? (
        colors.map((color) => {
          return (
            <Color key={color.id} color={color} onDelete={handleDeleteColor} />
          );
        })
      ) : (
        <p>
          No colors...
          <br />
          Start by adding one!
        </p>
      )}
    </>
  );
}

export default App;
