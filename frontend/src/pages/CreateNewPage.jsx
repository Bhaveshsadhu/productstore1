import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNewPage = () => {
    const [form, setForm] = useState({ title: '', description: '', image: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await axios.post('http://localhost:5000/api/products', form);
            setLoading(false);
            navigate('/');
        } catch (err) {
            setError('Failed to create product');
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '2rem auto', background: 'var(--card-bg)', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: 24 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 24 }}>Add New Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={form.title} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={form.description} onChange={handleChange} required rows={3} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input type="url" className="form-control" name="image" value={form.image} onChange={handleChange} required />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>{loading ? 'Creating...' : 'Create Product'}</button>
            </form>
        </div>
    );
};

export default CreateNewPage;