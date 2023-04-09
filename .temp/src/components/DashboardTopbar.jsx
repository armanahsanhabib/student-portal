import React from 'react';
import { FaBars, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

const DashboardTopbar = (props) => {
    return (
        <div className='flex lg:hidden justify-between items-center text-gray-50 sticky top-0 left-0 right-0 py-3 px-5 bg-blue-500 z-50' >
            <section>
                <div onClick={() => props.handleMenuClick()}>
                    {props.isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </section>
            <h1 className='text-md flex items-center font-bold rounded bg-blue-900'>
                <span className='bg-yellow-500 p-2 rounded'>
                    <MdOutlineSpaceDashboard />
                </span>
                <span className='mx-3'>Student Portal</span>
            </h1>
            <section>
                <div onClick={() => props.handleLogOut()} className='hover:text-rose-500'>
                    <FaSignOutAlt />
                </div>
            </section>
        </div>
    );
};

export default DashboardTopbar;