
const Card = ({ product, onUpdate, onDelete }) => {
    if (!product) return null;

    const { imageUrl, name, price, description } = product;

    const handleUpdateClick = () => {
        if (onUpdate) {
            onUpdate(product);
        }
    };

    const handleDeleteClick = () => {
        if (onDelete) {
            onDelete(product);
        }
    };

    return (
        <div className="card m-2" style={{ width: "auto", height: "100%" }}>
            <img src={imageUrl} className="card-img-top" alt={name} style={{ height: "15rem" }} />
            <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
                <h5 className="card-price">${price}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={handleUpdateClick}>Update</button>
                <button className="btn btn-outline-danger" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
};

export default Card;
