import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => {
                console.log(res.data.products)
                setProducts(res.data.products)
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load products');
                setLoading(false);
            });
    }, []);

    if (loading) return <div style={{ textAlign: 'center', marginTop: '3rem' }}>Loading...</div>;
    if (error) return <div style={{ textAlign: 'center', color: 'red', marginTop: '3rem' }}>{error}</div>;

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            minHeight: '60vh'
        }}>
            {products.length === 0 ? (
                <div>No products found.</div>
            ) : (
                products.map(product => (
                    <ProductCard
                        key={product._id}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                    />
                ))
            )}
        </div>
    );
}

export default HomePage;