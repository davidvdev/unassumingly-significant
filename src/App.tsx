// Imports
import { useState } from 'react'
import './App.css'

// Components
import ButtonGrid from '../Components/ButtonGrid/ButtonGrid'
import Modal from '../Components/Modal/Modal'

function App() {

  const [modalOpen, setModalOpen] = useState(false)

  const options = [
    { name: "Object" },
    { name: "NPC" },
    { name: "Decoration" },
    { name: "Building" },
    { name: "Markings" },
    { name: "Strange Sigil" },
]

  return (
    <div className="App">
      <header>
        <h1>Unassumingly Significant</h1>
      </header>
      <ButtonGrid options={options} onClick={setModalOpen}/>
      { modalOpen &&
        <Modal setModalOpen={setModalOpen}/>
      }
    </div>
  )
}

export default App
