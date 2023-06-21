function Button(props){
    return(
        <button className="btn" style={{backgroundColor : props.colorBackgound, color: props.colorText, borderRadius: props.radius}}> {props.text} </button>
    )

};

export default Button;