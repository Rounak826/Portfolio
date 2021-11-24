

const Container = (props)=>{

    return(
        <div className="container-fluid vh-100 m-0 p-0 main" >
            {props.children}
        </div>
    )
}

export default Container;