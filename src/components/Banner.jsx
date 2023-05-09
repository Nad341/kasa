function Banner(props){
    const dirImage = '/images/';
    const urlImage = dirImage + props.urlImage;
return(
    <div className="banner" style={{ backgroundImage:  `url(${urlImage})`,height:`${props.height}` }}>
        <div className="banner-text">
            <h1>{props.text}</h1>
            </div> 
            </div>
)
}

export default Banner;  



