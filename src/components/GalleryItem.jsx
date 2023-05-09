function GalleryItems(props){
    return(

        <div className="gallery_item" style={{ backgroundImage:  `url(${props.urlImage})`}}>
            <span>{props.text}</span>
        </div>

    )
}

export default GalleryItems;