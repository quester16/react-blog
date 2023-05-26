import {useState, useEffect, useId} from "react";

import './Home.scss'
import {Link} from "react-router-dom";
import GetPosts from "../../services/getPosts.js";

const Home = () => {

    const [blogs, setBlogs] = useState([])

    const {getData} = new GetPosts()


    useEffect(() => {
        getData()
            .then(setBlogs)
    }, [])

    console.log(blogs)
    const setContent = ({img, title, topic, subTitle, id}) => {
        return(
            <Link to={`/:${id}`} className="post" key={id} >
                <div className="img">
                    <img src={img} alt="placeholder"/>
                </div>
                <div className="body">
                    <div className="topic">&#9864;{topic}</div>
                    <div className="title">{title}</div>
                    <div className="sub-title">{subTitle}</div>
                </div>
            </Link>
        )
    }

    return(
        <div className="blog__container">
            {blogs.map(blog => setContent(blog))}
        </div>
    )
}

export default Home;