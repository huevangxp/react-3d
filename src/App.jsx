import { useState, useEffect } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    // random firstname and lastname
    const firstName = Math.floor(Math.random() * 100);
    const lastName = Math.floor(Math.random() * 100);
    setData([...data, { firstName, lastName }]);
  }, []);

  const handleShow = () => {
    setData([...data, { firstName, lastName }]);
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2"> 
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
      {
        data.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 mt-2 p-4 border border-gray-300 rounded" >
            <h1>First Name: {item.firstName}</h1>
            <h1>Last Name: {item.lastName}</h1>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default App;
