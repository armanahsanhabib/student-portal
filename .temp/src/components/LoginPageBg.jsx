import React from 'react';
import bg_image from '../assets/images/5437682.png';

const LoginPageBg = () => {
    return (
        <div className='bg-blue-500 h-1/2 md:h-screen w-full md:w-1/2 py-16 flex justify-center items-center text-center'>
            <div className="text-slate-50">
                <img
                    src={bg_image} alt="bg_image"
                    className='bg_image mb-5 mx-auto w-1/2 md:w-1/2'
                />
                <h1 className='text-3xl font-bold mb-1 md:mb-3'>
                    Students Portal
                </h1>
                <p>
                    All your information and result in one place.
                </p>
            </div>
        </div>
    );
};

export default LoginPageBg;