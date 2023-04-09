import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import thumbnail_image from '../assets/images/thumbnail.png';

const VideoTutorialsCard = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePlayVideo = (event) => {
        event.preventDefault();
        setShowPopup(true);
    };

    return (
        <div className='w-full flex flex-col justify-center rounded-lg bg-gray-300'>
            <div className=''>
                <img src={thumbnail_image} alt="thumnail_image" className='block rounded-t-lg' />
            </div>
            <div className='w-full px-4 py-5 text-center scale-75 lg:scale-100'>
                <div className='mb-2'>
                    <h1 className='text-xl font-medium text-start'>{props.title}</h1>
                </div>
                <div className='mb-3'>
                    <p className='text-sm text-start'>
                        {props.description}
                    </p>
                </div>
                <div className='w-3/4 mx-auto text-lg text-center py-2 cursor-pointer rounded-lg bg-red-500 hover:bg-red-800 text-gray-50 font-bold'>
                    <a href={props.link} onClick={handlePlayVideo} className='block flex items-center justify-center'><FaPlay className='mr-2' /> Play Video</a>
                </div>
                {showPopup && (
                    <div className='relative fixed top-0 right-0 flex items-center justify-center z-50 overflow-hidden'>
                        <div className=''>
                            <iframe
                                width="560"
                                height="315"
                                src={`${props.link}?autoplay=1&fs=1?`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className=''
                            />
                            <div className='absolute top-0 right-0 p-4 cursor-pointer text-white bg-red-500' onClick={() => setShowPopup(false)}>Close</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoTutorialsCard;