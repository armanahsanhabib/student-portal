import React from 'react';

const ProfileDetails = (props) => {
    const image = require(`../assets/database/students-image/${props.userId}.jpeg`);
    const time = new Date().getHours();

    return (
        <div className='my-8 px-8 mx-auto' style={{ width: "1200px" }}>
            <div className='flex items-center rounded-lg border shadow-lg py-5 px-8'>
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
            </div>
        </div>
    );
};

export default ProfileDetails;