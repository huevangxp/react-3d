import Car from './components/Car'

const App = () => {
  return (
    <div>
       <div className="flex">
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