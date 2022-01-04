import './ButtonGrid.css'

interface Props {
    options: Array<{
        name: string
    }>
    onClick: Function
}

const ButtonGrid = (props: Props) => {

    return(
        <div className="ButtonGrid">
            {props.options.map((item,index) => {
                return(
                    <div className="option" key={index}>
                        {/* replace SVG tags with Icons */}
                        <svg viewBox="0 0 100 100" onClick={() => props.onClick(true)}>
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <h4>{item.name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default ButtonGrid