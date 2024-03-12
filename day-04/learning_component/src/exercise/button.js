const Button = ()=>{
    return(
        <>
            <button className="mainButton">Call Me</button>
            <style jsx>{`
            .mainButton{
                padding: 20px 40px;
                border: 1px solid #000;
                border-radius: 8px;
                background-color: #FFF;
            }
            
            `}</style>
        </>
    )
}

export default Button;