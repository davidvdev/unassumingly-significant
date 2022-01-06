// Imports
import { useState } from 'react'
import './App.css'

// Components
import ButtonGrid from './Components/ButtonGrid/ButtonGrid'
import Modal from './Components/Modal/Modal'

// Data
import options from './json/options.json'
import containers from './json/containers.json'

// Images
import SVGcontainer from './images/container.svg'
import SVGhuman from './images/human.svg'
import SVGdecoration from './images/decoration.svg'
import SVGbuilding from './images/building.svg'
import SVGmarkings from './images/markings.svg'
import SVGsigil from './images/sigil.svg'

// const SVGcontainer = require('./images/container.svg')
// const SVGhuman = require('./images/human.svg')
// const SVGdecoration = require('./images/decoration.svg')
// const SVGbuilding = require('./images/building.svg')
// const SVGmarkings = require('./images/markings.svg')
// const SVGsigil = require('./images/sigil.svg')

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

type Images = {
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

  const images: Images = {
    containers: SVGcontainer,
    human: SVGhuman,
    decoration: SVGdecoration,
    building: SVGbuilding,
    markings: SVGmarkings,
    sigils: SVGsigil
  }

  const [modalOpen, setModalOpen] = useState(false)
  const [modalTarget, setModalTarget] = useState(data.containers)
  const [targetSVG, setTargetSVG] = useState(images.containers)

  const openSpecificModal = (item: keyof Data & keyof Images) => {
    console.log(item)
    setModalOpen(true)
    setModalTarget(data[item])
    setTargetSVG(images[item])
  }

  return (
    <div className="App">
      { modalOpen &&
        <Modal setModalOpen={setModalOpen} target={modalTarget} svg={targetSVG}/>
      }
      <header>
        <h1>Unassumingly Significant</h1>
      </header>
      <ButtonGrid options={options} images={images} onClick={openSpecificModal}/>
    </div>
  )
}

export default App
