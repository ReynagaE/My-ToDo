import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-blue-600 max-w-md w-full p-10 rounded-md">
                
                <h1 className="text-2xl font-bold text-white text-center">Home Page</h1>
            <div className="flex gap-x-2 my-5 justify-between text-white">
                <Link to="/login"
                    className="no-underline hover:underline ...">Sign in</Link>
                <Link to="/register"
                    className="no-underline hover:underline ...">Sign up</Link>
            </div>
            </div>
        </div>
    )
}

export default HomePage