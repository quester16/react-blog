import {useState, useEffect, useId} from "react";

import './Home.scss'

const Home = () => {

    const data = [
        {
            "img": 'src/assets/img/test.jpg',
            "title": 'Как с помощью Data определить город по IP?',
            "subTitle": 'Делюсь информацией о том, как определить IP по местоположение',
            "topic": 'JavaScript'
        }
    ]

    const [blogs, setBlogs] = useState([])
    const id = useId()

    useEffect(() => {
        setBlogs(data)
    }, [])

    const setContent = ({img, title, topic, subTitle}) => {
        return(
            <div className="blog" key={id}>
                <div className="img">
                    <img src={img} alt="placeholder"/>
                </div>
                <div className="body">
                    <div className="topic">&#9864;{topic}</div>
                    <div className="title">{title}</div>
                    <div className="sub-title">{subTitle}</div>
                </div>
            </div>
        )
    }

    return(
        <div className="blog__container">
            {blogs.map(blog => setContent(blog))}
        </div>
    )
}

export default Home;