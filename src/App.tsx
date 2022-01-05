// Imports
import { useState } from 'react'
import './App.css'

// Components
import ButtonGrid from '../Components/ButtonGrid/ButtonGrid'
import Modal from '../Components/Modal/Modal'

// Data
import options from '../json/options.json'
import containers from '../json/containers.json'

// Types
type Data = {
  options: any
  containers: any
  human: any
  decoration: any
  building: any
  markings: any
  sigils: any
}

function App() {

  const data: Data = { 
    options: options, 
    containers: containers,
    human: containers,
    decoration: containers,
    building: containers,
    markings: containers,
    sigils: containers
  }


  const [modalOpen, setModalOpen] = useState(false)
  const [modalTarget, setModalTarget] = useState({name: ""})

  const openSpecificModal = (item: keyof Data) => {
    console.log(item)
    setModalOpen(true)
    setModalTarget(data[item][0])
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
