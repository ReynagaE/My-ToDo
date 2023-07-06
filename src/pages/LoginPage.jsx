import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const {signin, isAuthenticated, errors: signinErrors} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated])

    const onSubmit = handleSubmit(data => {
        signin(data)
    })

    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-blue-600 max-w-md w-full p-10 rounded-md">
                
                <h1 className="text-2xl font-bold text-white">Sign in</h1>

                {
                signinErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
                        {error}
                    </div>
                ))
                }

                <form onSubmit={onSubmit}>
                    <input type="email" {...register('email', {required: true})}
                        className="w-full bg-blue-300 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-yellow-500">Email is required</p>
                    )}

                    <input type="password" {...register('password', {required: true})}
                        className="w-full bg-blue-300 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Password"
                    />
                    {errors.password && (
                        <p className="text-yellow-500">Password is required</p>
                    )}

                    <button className="text-white" type='submit'>Sign in</button>
                </form>

                <p className="flex gap-x-2 justify-between text-white">
                    Don't have an account? <Link to="/register"
                    className="no-underline hover:underline ...">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage