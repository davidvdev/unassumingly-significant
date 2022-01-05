// Imports
import { useState } from 'react'
import './App.css'

// Components
import ButtonGrid from '../Components/ButtonGrid/ButtonGrid'
import Modal from '../Components/Modal/Modal'

function App() {

  const [modalOpen, setModalOpen] = useState(false)
  const [modalTarget, setModalTarget] = useState({name: ""})

  const options = [
    { name: "Object" },
    { name: "NPC" },
    { name: "Decoration" },
    { name: "Building" },
    { name: "Markings" },
    { name: "Strange Sigil" },
  ]

  const openSpecificModal = (item:any) => {
    setModalOpen(true)
    setModalTarget(item)
  }

  return (
    <div className="App">
      { modalOpen &&
        <Modal setModalOpen={setModalOpen} data={modalTarget}/>
      }
      <header>
        <h1>Unassumingly Significant</h1>
      </header>
      <ButtonGrid options={options} onClick={openSpecificModal}/>
    </div>
  )
}

export default App
