import Card from "../components/Card"

const cards = [
    {
        "_id": "68f63113b0eeee0483983a3e",
        "name": "Product 1",
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        "price": 2000,
        "description": "Latest iPhone 17 with improved camera and battery life.",
        "createdAt": "2025-10-20T12:54:43.310Z",
        "updatedAt": "2025-10-20T12:54:43.310Z",
        "__v": 0
    },
    {
        "_id": "68fd62397849952c4fe1b218",
        "name": "Product 2",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        "price": 1500,
        "description": "iPhone 14 with A15 chip and dual-camera system.",
        "createdAt": "2025-10-25T23:50:17.201Z",
        "updatedAt": "2025-10-25T23:50:17.201Z",
        "__v": 0
    },
    {
        "_id": "68f89273ab74483e13c7761f",
        "name": "Product 3",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        "price": 1400,
        "description": "Samsung Galaxy S23 with 200MP camera and AMOLED display.",
        "createdAt": "2025-10-28T14:20:40.112Z",
        "updatedAt": "2025-10-28T14:20:40.112Z",
        "__v": 0
    },
    {
        "_id": "68fab6238daac52c19e2003a",
        "name": "Product 4",
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        "price": 1200,
        "description": "Google Pixel 8 with advanced AI camera features.",
        "createdAt": "2025-11-02T09:11:19.510Z",
        "updatedAt": "2025-11-02T09:11:19.510Z",
        "__v": 0
    },
    {
        "_id": "68ffab87231aa84be329d822",
        "name": "Product 5",
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        "price": 1300,
        "description": "OnePlus 12 Pro with Snapdragon chipset and 120Hz display.",
        "createdAt": "2025-11-05T16:34:02.882Z",
        "updatedAt": "2025-11-05T16:34:02.882Z",
        "__v": 0
    },
    {
        "_id": "68fd62397849952c4fe1b218",
        "name": "Product 2",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        "price": 1500,
        "description": "iPhone 14 with A15 chip and dual-camera system.",
        "createdAt": "2025-10-25T23:50:17.201Z",
        "updatedAt": "2025-10-25T23:50:17.201Z",
        "__v": 0
    },
    {
        "_id": "68f89273ab74483e13c7761f",
        "name": "Product 3",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        "price": 1400,
        "description": "Samsung Galaxy S23 with 200MP camera and AMOLED display.",
        "createdAt": "2025-10-28T14:20:40.112Z",
        "updatedAt": "2025-10-28T14:20:40.112Z",
        "__v": 0
    },
    {
        "_id": "68fab6238daac52c19e2003a",
        "name": "Product 4",
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        "price": 1200,
        "description": "Google Pixel 8 with advanced AI camera features.",
        "createdAt": "2025-11-02T09:11:19.510Z",
        "updatedAt": "2025-11-02T09:11:19.510Z",
        "__v": 0
    }
];


const HomePage = () => {
    return (
        <div className='container home-page mt-4'>
            <div className="row">
                {
                    cards.map((card) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={card._id}>
                            <Card
                                img={card.image}
                                title={card.name}
                                price={`$${card.price}`}
                                description={card.description}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage