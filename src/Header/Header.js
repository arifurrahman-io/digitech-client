import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import logo from '../digitect_logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/addservices'>Add Service</Link></li>
                        <li><Link to='/myreviews'>My Reviews</Link></li>
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl"><img src={logo} className="w-28" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl font-semibold text-white">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/addservices'>Add Service</Link></li>
                    <li><Link to='/myreviews'>My Reviews</Link></li>
                </ul>
            </div>
            <div className="navbar-end text-white ">
                {
                    user?.uid ?
                        <>
                            <Link><button onClick={handleLogOut} className='px-3 text-xl'>Sign Out</button></Link>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar pl-2">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </label>
                        </> :
                        <>
                            <Link to='/signup' className='px-3 text-xl '><button>Signup</button></Link>
                            <Link to='/signin' className='px-3 text-xl '><button>Signin</button></Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Header;