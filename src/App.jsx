import Car from './components/Car'

const App = () => {
  return (
    <div>
       <div className="flex justify-center items-center w-screen h-screen">
        <div>
          <h1>Car</h1>
        </div>
        <div>
          <Car/>
        </div>
       </div>
    </div>
  )
}

export default App