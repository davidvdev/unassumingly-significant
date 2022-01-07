import './ButtonGrid.css'

interface Props {
    options: Array<{
        name: string
    }>
    onClick: Function
    images: any
}

const ButtonGrid = (props: Props) => {


    const handleClick = (item: string, available: boolean) => {
        available ? props.onClick(item.toLowerCase()) : null
    }

    return(
        <div className="ButtonGrid">
            {props.options.map((item,index) => {

                const available = props.images[item.name.toLowerCase()] ? true : false

                return(
                    <div className="option" key={index} onClick={() => handleClick(item.name, available)}>
                        <img src={props.images[item.name.toLowerCase()] || props.images.soon}/>
                        <h4>{item.name}</h4>
                        { !available &&
                            <small>Coming Soon!</small>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default ButtonGrid