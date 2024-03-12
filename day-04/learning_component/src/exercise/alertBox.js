const AlertBox= ({type, message})=>{
    let alertClass = "alert-class";
    let iconClass = ""
    let style={}

    if (type === "warning"){
        alertClass += " warning"
        iconClass += "fas fa-exclamation-circle"
        style = {backgroundColor: "red", color: "white"}

    } else if(type === "success"){
        alertClass += " success"
        iconClass += "fas fa-check-circle"
        style = {backgroundColor: "green", color: "white"}

    }
    return(
        <div className={alertClass} style={style}>
            <i className={iconClass}></i>
            <p>{message}</p>
        </div>
    )
}

export default AlertBox;