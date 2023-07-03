import { useForm } from "react-hook-form"

function RegisterPage() {

    const { register, handleSubmit } = useForm()

    return (
        <div className="bg-blue-600 max-w-md p-10 rounded-md">
            <form onSubmit={handleSubmit(values => {
                console.log(values)
            })}>
                <input type="text" {...register('username', {required: true})}
                    className="w-full bg-blue-300 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Username"
                />
                <input type="email" {...register('email', {required: true})}
                    className="w-full bg-blue-300 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                />
                <input type="password" {...register('password', {required: true})}
                    className="w-full bg-blue-300 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Password"
                />
                <button className="text-white" type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage