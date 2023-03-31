import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiCodeAlt, BiGroup, BiPhoneCall, BiUser } from 'react-icons/bi';
import { MdOutlineAlternateEmail, MdOutlineBloodtype } from 'react-icons/md';
import { VscSymbolNumeric } from 'react-icons/vsc';
import students from '../assets/database/students.json';
import NoticeList from './NoticeList';

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
    const imageSrc = require(`../assets/database/students-image/${props.userId}.jpeg`);
    const time = new Date().getHours();
    const studentsInfo = students.find(user => user.userId === props.userId);

    return (
        <div className='my-8 px-8 mx-auto' style={{ width: "1200px" }}>
            <section className='flex items-center rounded-lg border shadow-md py-5 px-8 mb-6'>
                <div className='w-16 h-auto mr-5'>
                    <img className='rounded-lg' src={imageSrc} alt={studentsInfo.nickName} />
                </div>
                <div>
                    <h1 className='text-2xl font-bold mb-2'>
                        {time < 12 ? 'Good Morning' : time < 18 ? 'Good Afternoon' : 'Good Evening'}
                    </h1>
                    <h2 className='text-lg text-gray-600'>
                        Hello, <span className='font-bold'>{studentsInfo.nickName}</span>! Welcome to your profile.
                    </h2>
                </div>
            </section>
            <NoticeList
                date="31"
                month="Mar"
                title="Midterm Exam Result Published!"
                description="You can see your midterm exam result from the result section."
            />
            <section className='rounded-lg border shadow-md py-5 px-8 mt-6'>
                <h2 className='text-lg font-bold text-gray-600'>
                    Profile Details
                </h2>
                <hr className='mt-3 mb-5' />
                <ProfileDetailsList iconName={BiUser} title="Name" titleValue={studentsInfo.name} />
                <ProfileDetailsList iconName={VscSymbolNumeric} title="ID" titleValue={studentsInfo.userId} />
                <ProfileDetailsList iconName={AiOutlineCalendar} title="Session" titleValue="Winter-2023" />
                <ProfileDetailsList iconName={BiCodeAlt} title="Program" titleValue="B.Sc. in Computer Science and Engineering" />
                <ProfileDetailsList iconName={BiGroup} title="Section" titleValue={studentsInfo.section} />
                <ProfileDetailsList iconName={MdOutlineBloodtype} title="Blood" titleValue={studentsInfo.blood} />
                <ProfileDetailsList iconName={BiPhoneCall} title="Mobile" titleValue={studentsInfo.mobile} />
                <ProfileDetailsList iconName={MdOutlineAlternateEmail} title="Email" titleValue={studentsInfo.email} />
            </section>
        </div>
    );
};

export default ProfileDetails;