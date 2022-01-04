import './ButtonGrid.css'

interface Props {
    options: Array<{
        name: string
    }>
    onClick: Function
}

const ButtonGrid = (props: Props) => {

    const handleClick = (item: any) => {
        console.log(item)
        props.onClick(item)
    }

    return(
        <div className="ButtonGrid">
            {props.options.map((item,index) => {
                return(
                    <div className="option" key={index} onClick={() => handleClick(item)}>
                        {/* replace SVG tags with Icons */}
                        <svg viewBox="0 0 100 100" >
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