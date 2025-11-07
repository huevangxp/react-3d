import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleShow = () => {
    console.log(firstName, lastName);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div> 
      <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded">
        <label htmlFor="name">First Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          className="border border-gray-300 rounded p-2"
        />
        <label htmlFor="name">Last Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          className="border border-gray-300 rounded p-2"
        />
        <button
          onClick={handleShow}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
        </div>
      <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded" >
        <h1>First Name: {firstName}</h1>
        <h1>Last Name: {lastName}</h1>
      </div>
      </div>
    </div>
  );
};

export default App;
