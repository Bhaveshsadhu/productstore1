import axios from "axios";

const origin =
    typeof window !== "undefined" && window.location
        ? window.location.origin
        : "";

const apiBaseUrl =
    import.meta.env.VITE_API_URL ||
    (import.meta.env.MODE === "development"
        ? "http://localhost:5000/api"
        : `${origin}/api`);

const axiosClient = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;
