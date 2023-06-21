function Banner(props){


return(
    <div className="banner" style={{ backgroundImage:  `url(${props.urlImage})`,height:'218 px' }}>
        <div className="banner-text">
            <h1 style={{fontWeight:300}}>{props.text}</h1>
            <p>{props.subTitle}</p>
            </div> 
            </div>
)
}

export default Banner;  



