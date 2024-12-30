import { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', { name, email, password });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl text-white font-bold mb-6 text-center">Sign UP</h2>
            <div className="mb-4">
                <label className="block text-gray-400 mb-2">Name:</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded bg-gray-700 text-white"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-400 mb-2">Email:</label>
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded bg-gray-700 text-white"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-400 mb-2">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded bg-gray-700 text-white"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign Up</button>
        </form>
    );
};

export default SignUp;