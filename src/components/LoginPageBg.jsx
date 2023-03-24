import React from 'react';
import bg_image from '../assets/images/5437682.png';

const LoginPageBg = () => {
    return (
        <div className='bg-blue-500 md:h-screen h-2/4 md:w-2/4 w-full flex justify-center items-center text-center'>
            <div className="text-slate-50">
                <img
                    src={bg_image} alt="bg_image"
                    className='bg_image mb-5 mx-auto w-2/4'
                />
                <h1 className='text-3xl font-bold mb-3'>
                    Students Portal and Result Panel.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Dicta, suscipit?
                </p>
            </div>
        </div>
    );
};

export default LoginPageBg;