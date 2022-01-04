import './Modal.css'

interface Props {
    setModalOpen: Function
    data: {
        name: string
    }
}

const Modal = (props: Props) => {
    return(
        <div className="Modal">
            <div className='content'>
                <button onClick={() => {props.setModalOpen(false)}}>click to close</button>
                <h1>Hello {props.data.name}</h1>
            </div>
        </div>
    )
}

export default Modal