function Banner(props){


return(
    <div className="banner" style={{ backgroundImage:  `url(${props.urlImage})`,height:`${props.height}` }}>
        <div className="banner-text">
            <h1 style={{fontWeight:300}}>{props.text}</h1>
            </div> 
            </div>
)
}

export default Banner;  



