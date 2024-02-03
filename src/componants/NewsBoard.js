import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category }) {

    const api_url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b5e5337168244d2aa1b0fb657d1ee217`;
    const [articles, setarticle] = useState([]);


    useEffect(() => {
        fetch(api_url).then((res) => res.json())
            .then((data) => setarticle(data.articles))
    }, [category])
    return (
        <>
            <h2 className="text-center mt-2">Latest <span className="bage bg-danger  ">News</span></h2>
            <div className="row">
                {
                    articles.map((news, index) => { return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} /> }
                    )
                }
            </div>
        </>
    )
}
export default NewsBoard;