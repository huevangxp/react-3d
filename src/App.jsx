import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-gray-300 rounded p-2"
        />
        <button
          onClick={() => console.log(name)}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
