import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Login:React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate()
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e:any) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/auth/login",
      formData,
      { withCredentials: true } // needed if using httpOnly cookies
    );
    
     
    
    if(res.status===200){
      // Save the tokens
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
        navigate('/dashboard')
        console.log("Login response:", res.data);
    }

    
    // alert("Login successful!");

    // You can now navigate to admin page or protected route
  } catch (error:any) {
    console.error("Login error:", error.response?.data || error.message);
    alert(error.response?.data?.error || "Login failed");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        onSubmit={handleLogin}
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/Register" className="underline text-green-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};


export default Login