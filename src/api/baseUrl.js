import axios from "axios";

const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// **Axios Interceptors for Requests**
baseUrl.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// **Axios Interceptors for Responses**
baseUrl.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // **যদি টোকেন এক্সপায়ার হয়ে যায় (401 Error), তাহলে নতুন টোকেন আনতে হবে।**
    if (error.response && error?.response?.data?.message === "jwt expired" && !originalRequest._retry) {
      originalRequest._retry = true; // লুপ এড়ানোর জন্য রিট্রাই চেক
      
      try {
        // **রিফ্রেশ টোকেন দিয়ে নতুন এক্সেস টোকেন আনতে হবে।**
        const refreshResponse = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh-token`,
          {}, // Body খালি থাকবে
          { withCredentials: true } // এখানে সেট করতে হবে ✅
        );

        const newAccessToken = refreshResponse?.data?.data?.accessToken;
        localStorage.setItem("access-token", newAccessToken);

        // **নতুন টোকেন সেট করে আবার আগের ফেইল হওয়া রিকুয়েস্ট ট্রাই করবো।**
        originalRequest.headers.Authorization = `${newAccessToken}`;
        return baseUrl(originalRequest);
      } catch (refreshError) {
        console.error("Session expired. Please log in again.");
        localStorage.removeItem("access-token");
        localStorage.removeItem("user");
        window.location.href = "/login"; // ইউজারকে লগইন পেজে পাঠানো
      }
    }

    return Promise.reject(error);
  }
);

export default baseUrl;
