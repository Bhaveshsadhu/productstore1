import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container>
                <Row className="text-center text-md-start">

                    {/* Left Section */}
                    <Col md={4} className="mb-3">
                        <h5 className="fw-bold">Product Store</h5>
                        <p className="small">
                            Your one-stop shop for all premium gadgets & accessories.
                        </p>
                    </Col>

                    {/* Center Links */}
                    <Col md={4} className="mb-3">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Products</a></li>
                            <li><a href="#" className="text-light text-decoration-none">About</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </Col>

                    {/* Right Section: Contact */}
                    <Col md={4} className="mb-3">
                        <h6 className="fw-bold">Contact Us</h6>
                        <p className="small mb-1">Email: support@productstore.com</p>
                        <p className="small mb-1">Phone: +61 400 000 000</p>
                        <p className="small">Address: Sydney, NSW, Australia</p>
                    </Col>

                </Row>

                <hr className="border-light" />

                <p className="text-center small m-0">
                    © {new Date().getFullYear()} Product Store. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
