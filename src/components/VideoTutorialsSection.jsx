import React from 'react';

const VideoTutorialsSection = (props) => {
    return (
        <section className='rounded-lg border shadow-sm py-5 px-5 lg:px-8'>
            <h2 className='text-md lg:text-2xl font-bold text-blue-600'>
                <span>{props.sectionName}</span>
            </h2>
            <hr className='mt-3 mb-5' />
            <div className='grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {props.videoTutorialsCard}
            </div>
        </section>
    );
};

export default VideoTutorialsSection;