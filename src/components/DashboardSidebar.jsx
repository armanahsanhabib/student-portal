import React from 'react';
import { AiFillFilePdf } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsFillBellFill } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { MdOutlineSpaceDashboard, MdVideoLibrary } from 'react-icons/md';
import NavList from './NavList';

const DashboardSidebar = (props) => {
    return (
        <div
            className={`${props.isOpen ? 'block' : 'hidden'} lg:flex bg-blue-500 w-80 h-screen lg:sticky fixed top-12 lg:top-0 left-0 p-5 text-gray-50 flex-col justify-between z-10`}
            id='sidebar'
        >
            <section>
                <h1 className='text-xl lg:flex hidden items-center font-bold mb-3 rounded bg-blue-900'>
                    <span className='mr-3 bg-yellow-500 text-4xl py-2 px-2 rounded'>
                        <MdOutlineSpaceDashboard />
                    </span>
                    <span>Student Portal</span>
                </h1>
                <ul className='flex flex-col'>
                    <NavList icon={BiUser} iconText="Profile Details" onClick={() => props.handleNavClick('profile')} />
                    <NavList icon={BsFillBellFill} iconText="Notice Board" onClick={() => props.handleNavClick('notice')} />
                    <NavList icon={GiProgression} iconText="My Result" onClick={() => props.handleNavClick('result')} />
                    <NavList icon={AiFillFilePdf} iconText="Study Materials" onClick={() => props.handleNavClick('study')} />
                    <NavList icon={MdVideoLibrary} iconText="Video Tutorials" onClick={() => props.handleNavClick('video')} />
                </ul>
            </section>
            <section>
                <NavList icon={FaSignOutAlt} iconText="Log out" styleName="hover:bg-rose-500" onClick={() => props.handleLogOut()} />
            </section>
        </div>
    );
};

export default DashboardSidebar;
