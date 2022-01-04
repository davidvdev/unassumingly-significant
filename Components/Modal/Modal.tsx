

interface Props {
    setModalOpen: Function
}

const Modal = (props: Props) => {
    return(
        <div className="Modal">
            <button onClick={() => {props.setModalOpen(false)}}>click to close</button>
            <h1>Hello Modal</h1>
        </div>
    )
}

export default Modal