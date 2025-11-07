import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default App;
