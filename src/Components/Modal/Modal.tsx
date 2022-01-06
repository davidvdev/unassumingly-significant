import { useState } from 'react'
import './Modal.css'

interface Props {
    setModalOpen: Function
    target: any
    svg: any
}

const Modal = (props: Props) => {

    
    const t = props.target
    
    const clickArea = (event:any) => {
        if (event.target === event.currentTarget){
            props.setModalOpen(false)
        }
    }
    
    const randomizer = (arr: Array<string>) => {
        return(
            <span style={{color: "red"}}>{arr[Math.floor(Math.random() * arr.length)]}</span>
            )
        }
        
        const textGen = (name: string) => {
            switch (name) {
                case "Containers":
                    return(
                        <div>
                        <p>
                            There are {randomizer(t.quantity)} {randomizer(t.description)} {randomizer(t.type)} nearby.
                        </p>    
                        <p>
                            They contain {randomizer(t.content)}.
                        </p>
                        </div>
                    )
                default:
                    return(
                        <div>
                            <p>
                                Coming Soon!
                            </p>
                        </div>
                    )
                }
            }
            
    const [text, setText] = useState(textGen(t.name))

    return(
        <div className="Modal" onClick={(event) => {clickArea(event)}}>
            <div className='content'>
                <button onClick={() => {props.setModalOpen(false)}}>click to close</button>
                <h1>{t.name || "Coming Soon"}</h1>
                <div className="icon" onClick={() => setText(textGen(t.name || ""))}>
                    <img src={props.svg || ""} alt={t.name || "no image"}/>
                    <small>click to reroll</small>
                </div>
                { text }
            </div>
        </div>
    )
}

export default Modal