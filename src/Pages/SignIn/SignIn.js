import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import img from '../../signup.jpg';
import google from '../../google.png';
import { GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {

    const { signIn, providerLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e);
                if (e.code === "auth/user-not-found") {
                    toast.error('Make sure you registered with this email address.')
                }
                if (e.code === "auth/wrong-password") {
                    toast.error('Wrong Password!')
                }
            });
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Your email is verified!')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));

    }

    return (
        <div className="hero w-full">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center">
                    <img className='w-full' src={img} alt="" />
                </div>
                <form onSubmit={handleSignIn} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign In" />
                        </div>
                    </div>
                    <div className='text-center mb-6'>
                        <p >New user? <Link className='text-orange-600 font-bold ' to='/signup'>Sign Up</Link></p>
                        <h3 className='text-xl font-semibold mt-8'>Or Sign In with</h3>
                        <button onClick={handleGoogleSignIn}><img src={google} className='w-16 mx-auto' alt="" /></button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignIn;