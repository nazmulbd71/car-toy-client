import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import login from '../../assets/images/login-now.png'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const {logIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value 
        console.log(email,password)
    
        logIn(email,password)
        .then(result=>{
            const user = result.user 
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-row justify-evenly">
                    <div className="text-center w-1/2">
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center pt-5">Login Now !</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="mt-5">Don't have an account please <Link className="underline text-blue-700" to="/register">Register</Link></p>
                        </form>

                        <div>
                            <div className="divider mt-0">OR</div>
                            <div className='flex justify-center'>
                                <button><FcGoogle className='h-10 mt-0 mb-3 w-8'></FcGoogle></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;