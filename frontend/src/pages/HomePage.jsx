import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Card from "../components/Card";

import { deleteProduct, getProducts, updateProduct } from "../axios/productApi";


const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        imageUrl: "",
        description: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);


    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await getProducts();
                setProducts(response.data.products || []);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleDelete = async (product) => {
        if (!product?._id) return;

        const confirmed = window.confirm(`Are you sure you want to delete "${product.name}"?`);
        if (!confirmed) return;

        try {
            await deleteProduct(product._id);
            setProducts((prev) => prev.filter((item) => item._id !== product._id));
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Something went wrong while deleting the product. Please try again.");
        }
    };

    const handleOpenEdit = (product) => {
        setSelectedProduct(product);
        setFormData({
            name: product?.name || "",
            price: product && typeof product.price !== "undefined" ? String(product.price) : "",
            imageUrl: product?.imageUrl || "",
            description: product?.description || "",
        });
        setShowEditModal(true);
    };

    const handleCloseEdit = () => {
        setShowEditModal(false);
        setSelectedProduct(null);
        setFormData({
            name: "",
            price: "",
            imageUrl: "",
            description: "",
        });
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdateSubmit = async (event) => {
        event.preventDefault();
        if (!selectedProduct?._id) return;

        setIsSubmitting(true);
        try {
            const parsedPrice = Number(formData.price);
            if (Number.isNaN(parsedPrice)) {
                alert("Please enter a valid price.");
                setIsSubmitting(false);
                return;
            }

            const payload = {
                ...formData,
                price: parsedPrice,
            };

            const response = await updateProduct(selectedProduct._id, payload);
            const updatedProduct = response.data.product || { ...selectedProduct, ...payload };

            setProducts((prev) =>
                prev.map((item) => (item._id === selectedProduct._id ? updatedProduct : item))
            );
            handleCloseEdit();
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Something went wrong while updating the product. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='container home-page mt-4'>
            {loading && (
                <p className="text-center mt-5">Loading products...</p>
            )}

            {!loading && products.length === 0 && (
                <p className="text-center mt-5">No products found. Please add one from the Create page.</p>
            )}

            <div className="row">
                {products.map((product) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product._id}>
                        <Card
                            product={product}
                            onUpdate={handleOpenEdit}
                            onDelete={handleDelete}
                        />
                    </div>
                ))}
            </div>

            <Modal show={showEditModal} onHide={handleCloseEdit} centered>
                <Form onSubmit={handleUpdateSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="editName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                name="price"
                                min="0.01"
                                step="0.01"
                                value={formData.price}
                                onChange={handleFormChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editImageUrl">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                required
                                type="url"
                                name="imageUrl"
                                value={formData.imageUrl}
                                onChange={handleFormChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                name="description"
                                value={formData.description}
                                onChange={handleFormChange}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseEdit} disabled={isSubmitting}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save Changes"}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default HomePage
