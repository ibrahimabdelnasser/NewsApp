import news from './news.jpg'
function NewsItem({ title, description, src, url }) {

    return (
        <>
            <div className='col-md-3 mt-4'>
                <div className="card bg-dark h-100 text-light mb-3  my-3 mx-3 px-2 py-2 " style={{ maxWidth: "345px" }} >
                    <img src={src ? src : news} height="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} </p>
                        <a href={url} className="btn btn-primary">read more</a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default NewsItem;