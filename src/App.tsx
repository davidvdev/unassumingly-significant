// Imports
import './App.css'

// Components
import ButtonGrid from '../Components/ButtonGrid/ButtonGrid'

function App() {

  const options = [
    { name: "test-1" },
    { name: "test-2" },
    { name: "test-3" },
    { name: "test-4" },
]

  return (
    <div className="App">
      <header>
        <h1>Unassumingly Significant</h1>
      </header>
      <ButtonGrid options={options}/>
    </div>
  )
}

export default App
