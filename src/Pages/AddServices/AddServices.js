import React, { useState } from 'react';
import img from '../../datainput.png';
import toast from 'react-hot-toast';

const AddServices = () => {

    const [service, setService] = useState({});

    const handleAddUser = event => {
        event.preventDefault();
        console.log(service);

        fetch('https://digitech-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Added Successfully');
                    event.target.reset();
                }
            });
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service }
        newService[field] = value;
        setService(newService);

    }

    return (
        <div className='lg:flex'>
            <div className='w-full lg:w-1/2'>
                <img className='w-full' src={img} alt="" />
            </div>
            <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100 my-10">
                <form onSubmit={handleAddUser} className="card-body">
                    <div className="form-control">
                        <input onBlur={handleInputBlur} name='title' type="text" placeholder="Service Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input onBlur={handleInputBlur} name='image' type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input onBlur={handleInputBlur} name='price' type="text" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <textarea onBlur={handleInputBlur} name='description' className="textarea textarea-info" placeholder="Description" required></textarea>
                    </div>
                    <div className="form-control">
                        <input onBlur={handleInputBlur} name='time' type="text" placeholder="Time Need" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input onBlur={handleInputBlur} name='warranty' type="text" placeholder="Warranty" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input onBlur={handleInputBlur} name='payment' type="text" placeholder="Payment Policy" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input onBlur={handleInputBlur} name='urgentPolicy' type="text" placeholder="Urgent Policy" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;