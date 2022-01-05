import './Modal.css'

interface Props {
    setModalOpen: Function
    data: {
        name: string
    }
}

const Modal = (props: Props) => {

    const clickArea = (event:any) => {
        if (event.target === event.currentTarget){
            props.setModalOpen(false)
        }
    }

    return(
        // <div className="Modal" onClick={() => {props.setModalOpen(false)}}>
        <div className="Modal" onClick={(event) => {clickArea(event)}}>
            <div className='content'>
                <button onClick={() => {props.setModalOpen(false)}}>click to close</button>
                <h1>Hello {props.data.name}</h1>
            </div>
        </div>
    )
}

export default Modal