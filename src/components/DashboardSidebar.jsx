/* import React from 'react';
import { AiFillFilePdf } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsFillBellFill } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { MdOutlineSpaceDashboard, MdVideoLibrary } from 'react-icons/md';

const NavList = (props) => {
    return (
        <li
            className={`flex items-center cursor-pointer hover:bg-blue-600 text-lg py-3 px-3 my-1 rounded ${props.styleName}`}
            onClick={props.onClick}
        >
            <span className='mr-3 text-blue-300'>
                <props.icon />
            </span>
            <span>{props.iconText}</span>
        </li>
    );
}

const DashboardSidebar = (props) => {
    return (
        <div className='bg-blue-500 w-80 h-screen p-5 text-gray-50 flex flex-col justify-between'>
            <section>
                <h1 className='text-xl flex items-center font-bold mb-3 rounded bg-blue-900'>
                    <span className='mr-3 bg-yellow-500 text-4xl py-2 px-2 rounded'>
                        <MdOutlineSpaceDashboard />
                    </span>
                    <span>Student Portal</span>
                </h1>
                <ul className='flex flex-col'>
                    <NavList icon={BiUser} iconText="Profile Details" />
                    <NavList icon={BsFillBellFill} iconText="Notice Board" />
                    <NavList icon={GiProgression} iconText="My Result" />
                    <NavList icon={AiFillFilePdf} iconText="Study Materials" />
                    <NavList icon={MdVideoLibrary} iconText="Video Tutorials" />
                </ul>
            </section>
            <section>
                <NavList icon={FaSignOutAlt} iconText="Log out" styleName="hover:bg-rose-500" onClick={() => props.handleLogOut()} />
            </section>
        </div>
    );
};

export default DashboardSidebar; */

import React from 'react';
import { AiFillFilePdf } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsFillBellFill } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { MdOutlineSpaceDashboard, MdVideoLibrary } from 'react-icons/md';

const NavList = (props) => {
    return (
        <li
            className={`flex items-center cursor-pointer hover:bg-blue-600 text-lg py-3 px-3 my-1 rounded ${props.styleName}`}
            onClick={props.onClick}
        >
            <span className='mr-3 text-blue-300'>
                <props.icon />
            </span>
            <span>{props.iconText}</span>
        </li>
    );
}

const DashboardSidebar = (props) => {
    return (
        <div className='bg-blue-500 w-80 h-screen sticky top-0 left-0 p-5 text-gray-50 flex flex-col justify-between'>
            <section>
                <h1 className='text-xl flex items-center font-bold mb-3 rounded bg-blue-900'>
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
