import GalleryContainer from "./GalleryContainer";
import GalleryItems from "./GalleryItem";
function Gallery(){
    return(
    <GalleryContainer>
        <GalleryItems text='Titre de la location 1' />
        <GalleryItems text='Titre de la location 2' />
        <GalleryItems text='Titre de la location 3' />
        <GalleryItems text='Titre de la location 4' />
        <GalleryItems text='Titre de la location 5' />
        <GalleryItems text='Titre de la location 6' />
    </GalleryContainer>
    )
}

export default Gallery; 