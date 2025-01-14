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

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmit} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
