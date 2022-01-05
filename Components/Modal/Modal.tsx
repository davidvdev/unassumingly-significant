import './Modal.css'

interface Props {
    setModalOpen: Function
    target: any
}

const Modal = (props: Props) => {

    const clickArea = (event:any) => {
        if (event.target === event.currentTarget){
            props.setModalOpen(false)
        }
    }

    const randomizer = (name: string) => {
        console.log(name)
    }

    return(
        // <div className="Modal" onClick={() => {props.setModalOpen(false)}}>
        <div className="Modal" onClick={(event) => {clickArea(event)}}>
            <div className='content'>
                <button onClick={() => {props.setModalOpen(false)}}>click to close</button>
                <h1>The {props.target.name}</h1>
                { randomizer(props.target.name) }
            </div>
        </div>
    )
}

export default Modal