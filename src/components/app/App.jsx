import Header from '../header/Header.jsx'
import Home from '../home/Home.jsx'
import Gallery from '../gallery/Gallery.jsx'

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <main>
                <Home/>
                <Gallery/>
            </main>
        </div>
    )
}

export default App;