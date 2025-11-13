import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ProductForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Get form values (you can send to API here)
      const formData = {
        name: form.productName.value,
        price: form.price.value,
        image: form.imageUrl.value,
        description: form.description.value,
      };

      console.log("Product Submitted:", formData);
      alert("Product submitted successfully!");

      form.reset();
      setValidated(false);
      return;
    }

    setValidated(true);
  };

  return (
    <Container className="mt-4 mb-4 p-2 rounded shadow-sm">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h3 className="mb-3 text-center">Add New Product</h3>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Product Name */}
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter product name"
                name="productName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a product name.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Price */}
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control
                required
                type="number"
                min="0.01"
                step="0.01"
                placeholder="Enter price"
                name="price"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid price greater than 0.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Image URL (NOT upload) */}
            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                required
                type="url"
                placeholder="https://example.com/image.jpg"
                name="imageUrl"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid image URL.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                name="description"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a product description.
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Add Product
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm;
