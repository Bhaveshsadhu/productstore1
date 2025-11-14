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

---

## 🚀 Deploying on Render

You can deploy the monorepo (Express API + Vite build) with a single Web Service on [Render](https://render.com):

1. Push the latest code and select **`render.yaml`** when creating a new Blueprint deployment.
2. Set the environment variable `MONGO_URI` to your MongoDB Atlas connection string (Render keeps it encrypted).
3. Render will run `npm install && npm run build`, which installs the frontend packages and creates the Vite production build.
4. The start command (`npm start`) launches `backend/server.js`, serves `frontend/dist`, and exposes the API routes on the same domain.

If the React client needs to call an external API in the future, create a `.env` file inside `frontend/` with `VITE_API_URL=<https://your-api-url>`. Otherwise, it automatically points to the same origin which keeps CORS simple in production.

---

## 🧪 Run Entire App on `http://localhost:5000`

Want the React UI and API on the same origin without running `npm run dev` in `frontend/`?  
Build the client once and start the backend:

```bash
npm install
npm run build          # creates frontend/dist
NODE_ENV=development npm run dev   # or npm start
```

Whenever you change React code, rerun `npm run build`; the Express server automatically serves everything in `frontend/dist`, so navigating to `http://localhost:5000/` loads the built React app while the API stays under `/api/*`.
