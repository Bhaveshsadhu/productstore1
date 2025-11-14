import axiosClient from "./axiosClient";

// GET all products
export const getProducts = async () => {
    return await axiosClient.get("/products"); // GET /api/products
};

// GET single product by id
export const getProductById = async (id) => {
    return await axiosClient.get(`/products/${id}`); // GET /api/products/:id
};

// CREATE product
export const createProduct = async (productData) => {
    return await axiosClient.post("/products", productData, {
        headers: {
            "Content-Type": "application/json"
        }
    }); // POST /api/products
};

// UPDATE product
export const updateProduct = async (id, productData) => {
    return await axiosClient.put(`/products/${id}`, productData, {
        headers: {
            "Content-Type": "application/json"
        }
    }); // PUT /api/products/:id
};

// DELETE product
export const deleteProduct = async (id) => {
    return await axiosClient.delete(`/products/${id}`, {
        headers: {
            "Accept": "application/json"
        }
    }); // DELETE /api/products/:id
};
