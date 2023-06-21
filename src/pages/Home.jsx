import Banner from '../components/Banner';
import Gallery from '../components/Gallery';


function Home(){
    return(
        <div>
            <Banner urlImage='/images/banner1.jpg' text='Chez vous, partout et ailleurs'  />
            <Gallery />
        </div>
    )
};

export default Home;