import GalleryContainer from "./GalleryContainer";
import GalleryItems from "./GalleryItem";
import Logements from "../logements.json";
function Gallery(){
    return(
    <GalleryContainer>
    {Logements.map((logement,index) => <GalleryItems key={index} text={logement.title} urlImage={logement.cover} />)}
    </GalleryContainer>
    )
}

export default Gallery; 