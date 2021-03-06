// Imports
import { useState } from 'react'
import './App.css'

// Components
import ButtonGrid from './Components/ButtonGrid/ButtonGrid'
import Modal from './Components/Modal/Modal'

// Data
import options from './json/options.json'
import containers from './json/containers.json'
import human from './json/human.json'
import decoration from './json/decoration.json'
import building from './json/building.json'
import markings from './json/markings.json'
import sigils from './json/sigil.json'

// Images
import SVGsoon from './images/soon.svg'
import SVGcontainer from './images/container.svg'
import SVGhuman from './images/human.svg'
import SVGdecoration from './images/decoration.svg'
import SVGbuilding from './images/building.svg'
import SVGmarkings from './images/markings.svg'
import SVGsigil from './images/sigil.svg'

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
  soon: any
}

function App() {

  const data: Data = { 
    options: options, 
    containers: containers,
    human: human,
    decoration: decoration,
    building: building,
    markings: markings,
    sigils: sigils
  }

  const images: Images = {
    containers: SVGcontainer,
    human: SVGhuman,
    decoration: SVGdecoration,
    building: SVGbuilding,
    markings: SVGmarkings,
    sigils: SVGsigil,
    soon: SVGsoon
  }

  const [modalOpen, setModalOpen] = useState(false)
  const [modalTarget, setModalTarget] = useState(data.containers)
  const [targetSVG, setTargetSVG] = useState(images.containers)

  const openSpecificModal = (item: keyof Data & keyof Images) => {
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
        <p>a collection of simple RPG generators providing interest and inspiration to everyday objects</p>
      </header>
      <ButtonGrid options={options} images={images} onClick={openSpecificModal}/>
    </div>
  )
}

export default App
