import news from './news.jpg'
function NewsItem({ title, description, src, url }) {

    return (
        <>
            <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{ maxWidth: "345px" }} >
                <img src={src ? src : news} style={{ height: "200px", width: "200px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description} </p>
                    <a href={url} className="btn btn-primary">read more</a>
                </div>
            </div>

        </>
    )
}
export default NewsItem;