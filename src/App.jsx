import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
     <div className="flex gap-2">
     <div >
     <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
     </div>
      <button onClick={() => console.log(name)}>Submit</button>
     </div>
    </div>
  );
};

export default App;
