function Paragraph(props){

    return(
        <div className="paraph">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        </div>
    )

}


export default Paragraph