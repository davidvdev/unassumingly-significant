import './ButtonGrid.css'

interface Props {
    options: Array<{
        name: string
    }>
    onClick: Function
    images: any
}

const ButtonGrid = (props: Props) => {

    const handleClick = (item: string) => {
        props.onClick(item.toLowerCase())
    }

    return(
        <div className="ButtonGrid">
            {props.options.map((item,index) => {
                return(
                    <div className="option" key={index} onClick={() => handleClick(item.name)}>
                        <img src={props.images[item.name.toLowerCase()]}/>
                        <h4>{item.name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default ButtonGrid