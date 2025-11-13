const Card = ({ img, title, price, description }) => {
    return (
        <div className="card m-2" style={{ width: "auto", height: "100%" }}>
            <img src={img} className="card-img-top" alt={title} style={{ height: "15rem" }} />
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <h5 className="card-price">{price}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default Card;
