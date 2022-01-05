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
  item: string
}
type DataKey = keyof Data

function App() {

  const data = { 
    options: options, 
    containers: containers
  }



  const [modalOpen, setModalOpen] = useState(false)
  const [modalTarget, setModalTarget] = useState({name: ""})

  const openSpecificModal = (item: DataKey) => {
    setModalOpen(true)
    setModalTarget(data[item])
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
