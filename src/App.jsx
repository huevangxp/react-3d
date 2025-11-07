import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
     <div>
     <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <button>Submit</button>
     </div>
    </div>
  );
};

export default App;
