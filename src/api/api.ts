import axios from "axios";

const API_URL = " https://gym-backend-2-61kx.onrender.com";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  city?: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const registerUser = (data: RegisterData) =>
  axios.post(`${API_URL}/auth/register`, data);

export const loginUser = (data: LoginData) =>
  axios.post(`${API_URL}/auth/login`, data);



export const getProfile = (token: string) =>
  axios.get(`${API_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });


// 👇 order response type declare किया
interface OrderResponse {
  id: string;
  amount: number;
  currency: string;
}

export const createOrder = (token: string, amount: number) =>
  axios.post<OrderResponse>(
    `${API_URL}/payment/create-order`,
    { amount },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  

// 👇 verify response type declare किया
interface VerifyResponse {
  success: boolean;
}

export const verifyPayment = (token: string, orderId: string) =>
  axios.post<VerifyResponse>(
    `${API_URL}/payment/verify`,
    { orderId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
