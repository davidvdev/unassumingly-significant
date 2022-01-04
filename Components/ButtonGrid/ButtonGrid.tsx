import './ButtonGrid.css'

interface Options {
    options: Array<{
        name: string
    }>
}

const ButtonGrid = (props: Options) => {

    return(
        <div className="ButtonGrid">
            {props.options.map((item,index) => {
                return(
                    <div className="option" key={index}>
                        {/* replace SVG tags with Icons */}
                        <svg viewBox="0 0 100 100">
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