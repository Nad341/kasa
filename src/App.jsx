import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
function App(){

    return(
        <div>
            <Header />
            <Banner urlImage='banner1.jpg' height='218px' text='Chez vous, partout et ailleurs'  />
            <Gallery />
           
        </div>
    )


}

export default App;