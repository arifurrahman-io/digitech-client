import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../signup.jpg'
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const { createUser, updateUserProfile, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, url);
                toast.success('Registration Successful!');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                if (err.code === "auth/email-already-in-use") {
                    toast.error('This email already used!')
                }
            });

    }

    const handleUpdateUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));

    }

    if (loading) {
        return <div>
            <button type="button" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Loading...
            </button>
        </div>
    }


    return (
        <div className="hero w-full">
            <Helmet>
                <title>Sign Up | GigiTech</title>
            </Helmet>
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center">
                    <img className='w-full' src={img} alt="" />
                </div>
                <form onSubmit={handleSignup} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name='photourl' placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                    </div>
                    <p className='text-center mb-6'>Already member? <Link className='text-orange-600 font-bold ' to='/signin'>Sign In</Link></p>
                </form>

            </div>
        </div>
    );
};

export default SignUp;