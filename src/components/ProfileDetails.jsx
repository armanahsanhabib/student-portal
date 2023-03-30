import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiCodeAlt, BiGroup, BiPhoneCall, BiUser } from 'react-icons/bi';
import { MdOutlineAlternateEmail, MdOutlineBloodtype } from 'react-icons/md';
import { VscSymbolNumeric } from 'react-icons/vsc';

const ProfileDetailsList = (props) => {
    return (
        <h3 className='flex items-center mb-3 text-lg text-gray-600'>
            <span><props.iconName className='mr-5' /></span>
            <span className='w-28 font-bold'>{props.title}:</span>
            <span>{props.titleValue}</span>
        </h3>
    );
}

const ProfileDetails = (props) => {
    const image = require(`../assets/database/students-image/${props.userId}.jpeg`);
    const time = new Date().getHours();

    return (
        <div className='my-8 px-8 mx-auto' style={{ width: "1200px" }}>
            <section className='flex items-center rounded-lg border shadow-md py-5 px-8'>
                <div className='w-16 h-auto mr-5'>
                    <img className='rounded-lg' src={image} alt={props.nickName} />
                </div>
                <div>
                    <h1 className='text-2xl font-bold mb-2'>
                        {time < 12 ? 'Good Morning' : time < 18 ? 'Good Afternoon' : 'Good Evening'}
                    </h1>
                    <h2 className='text-lg text-gray-600'>
                        Hello, <span className='font-bold'>{props.nickName}</span>! Welcome to your profile.
                    </h2>
                </div>
            </section>
            <section className='rounded-lg border shadow-md py-5 px-8 mt-10'>
                <h2 className='text-lg font-bold text-gray-600'>
                    Profile Details
                </h2>
                <hr className='mt-3 mb-5' />
                <ProfileDetailsList iconName={BiUser} title="Name" titleValue={props.name} />
                <ProfileDetailsList iconName={VscSymbolNumeric} title="ID" titleValue={props.userId} />
                <ProfileDetailsList iconName={AiOutlineCalendar} title="Session" titleValue="Winter-2023" />
                <ProfileDetailsList iconName={BiCodeAlt} title="Program" titleValue="B.Sc. in Computer Science and Engineering" />
                <ProfileDetailsList iconName={BiGroup} title="Section" titleValue={props.section} />
                <ProfileDetailsList iconName={MdOutlineBloodtype} title="Blood" titleValue={props.blood} />
                <ProfileDetailsList iconName={BiPhoneCall} title="Mobile" titleValue={props.mobile} />
                <ProfileDetailsList iconName={MdOutlineAlternateEmail} title="Email" titleValue={props.email} />
            </section>
        </div>
    );
};

export default ProfileDetails;