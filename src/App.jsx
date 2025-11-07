import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
     <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded">
     <div >
     <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-gray-300 rounded p-2"
      />
     </div>
      <button onClick={() => console.log(name)}>Submit</button>
     </div>
    </div>
  );
};

export default App;
