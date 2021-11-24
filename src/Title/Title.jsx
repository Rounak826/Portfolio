
import './title.css'
let i=0;
const Title = (props)=>{
    return(
        <div className="title">
            <div className="wrapper">
                {props.list.map(item=>{
                return(
                    <div key={i++}className="item">
                        <h3>{item}</h3>
                    </div>
                ) 
                })}

            </div>

            

        </div>

    )
}

export default Title;