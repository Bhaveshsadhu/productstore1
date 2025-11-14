# 🛒 Product Store — MERN Stack (React + Node + Express + MongoDB Atlas)

A simple and responsive **Product Store** application built using the **MERN stack** with **Bootstrap** for UI design and **Axios** for API communication.  
This project includes **full CRUD functionality** (Create, Read, Update, Delete) with a clean frontend and secure backend connected to **MongoDB Atlas**.

---

## 🚀 Features

### 🌐 Frontend (React + Bootstrap)
- Responsive UI using **Bootstrap 5**
- Add new products
- Edit existing products (pre-filled form)
- Delete products
- Display product cards with image, name, price, description
- Light/Dark mode toggle
- Axios API integration
- React Bootstrap form validation

### 🖥 Backend (Node.js + Express)
- REST API with full CRUD routes:
  - `POST /products` → Create a product  
  - `GET /products` → Fetch all products  
  - `GET /products/:id` → Fetch single product  
  - `PUT /products/:id` → Update product  
  - `DELETE /products/:id` → Delete product  
- JSON request handling
- CORS enabled
- MVC folder structure

### 🗄 Database (MongoDB Atlas)
- Cloud-hosted MongoDB cluster
- Mongoose schema/model for products
- Automatic timestamps

---

## 📁 Folder Structure

root/
│
├── backend/
│ ├── server.js
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── productController.js
│ ├── models/
│ │ └── productModel.js
│ ├── routes/
│ └── productRoutes.js
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── axios/
│ ├── pages/
│ ├── App.jsx
│ ├── main.jsx
│
└── README.md

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Bhaveshsadhu/productstore1.git
cd productstore1

⚙️ Backend Setup
Install dependencies
cd backend
npm install

Create .env file
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

Start backend
npm start


Backend runs on:

http://localhost:5000

💻 Frontend Setup
Install dependencies
cd frontend
npm install

Start frontend
npm run dev


Frontend runs on:

http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get single product
POST	/products	Create product
PUT	/products/:id	Update product
DELETE	/products/:id	Delete product
📝 Product JSON Structure
{
  "name": "iPhone 17",
  "price": 2000,
  "image": "https://example.com/image.jpg",
  "description": "Latest iPhone model"
}

🌙 Light / Dark Mode

Includes a custom light/dark theme toggle that updates:

Page background

Text color

Navbar & footer

Product cards

🛠 Future Improvements

Authentication (JWT)

Categories & filtering

Search functionality

Pagination

Add-to-cart system

🤝 Contributing

Pull requests are welcome!
If you'd like to enhance this project, feel free to fork and submit PRs.

📄 License

This project is open-source and free to use.


---

If you want, I can also generate:

✅ A **project banner image**  
✅ GitHub repo **badges** (React, Node, MongoDB, Bootstrap)  
✅ A **live demo section** for Render/Netlify  

Just tell me!

