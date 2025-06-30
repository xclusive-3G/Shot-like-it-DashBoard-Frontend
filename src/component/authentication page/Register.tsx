import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const email = (form.elements.namedItem('email') as HTMLInputElement).value
        const role = (form.elements.namedItem('role') as HTMLInputElement).value
        const password = (form.elements.namedItem('password') as HTMLInputElement).value

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("role", role);

        try {
            const res = await fetch('http://localhost:5000/auth/registerLink', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({
                    email,
                    password,
                    role
                })
            })
            if(res.status===200) {
                navigate('/')
            }
        } catch (error) {
            alert('frontend error')
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Sign Up</h1>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-semibold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            //  value={formData.email}
                            //  onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-gray-600 font-semibold mb-1">
                            Role
                        </label>
                        <select name="role" id="role">
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 font-semibold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            // value={formData.password}
                            // onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition"
                    >
                        Sign Up
                    </button>
                    <p>you already have an account? <Link to={'/'} className=' underline text-green-600'>Login</Link></p>
                </form>
            </div>
        </>
    )
}

export default Register