import { Link } from "react-router-dom";
import register from '../../assets/images/login-now.png'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
    const {createUser}= useContext(AuthContext)


const handleRegister = event =>{
    event.preventDefault();
    const form = event.target 
    const displayName = form.displayName.value
    const photo = form.photo.value 
    const email = form.email.value 
    const password = form.password.value 
    console.log(displayName,photo,email,password)

    createUser(email,password)
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
                <div className="hero-content flex-row">
                    <div className="text-center mx-11">
                        <img src={register} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center pt-5">Register Now !</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="displayName" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="mt-5">Already have an account please <Link className="underline text-blue-700" to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;