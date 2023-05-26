import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from '../header/Header.jsx'
import Home from '../home/Home.jsx'
import Gallery from '../gallery/Gallery.jsx'
import Blog from "../blog/Blog.jsx";

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <main>
                   <Routes>
                       <Route path="/" element={<Home/>}/>
                       <Route path="/gallery" element={<Gallery/>}/>
                       <Route path="/:blogId" element={<Blog/>}/>
                   </Routes>

                </main>
            </div>
        </Router>
    )
}

export default App;