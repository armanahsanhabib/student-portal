import React from 'react';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';

const StudyMaterialsCard = (props) => {
    return (
        <div className='origin-top-left w-full px-5 py-0 lg:py-8 flex justify-center rounded-lg bg-gray-100'>
            <div className='w-full text-center scale-75 lg:scale-100'>
                <BsFillFileEarmarkPdfFill className='w-32 h-auto mx-auto text-rose-700 w-full h-auto' />
                <div className='my-3'>
                    <div className='mt-2 text-xl font-medium text-purple-600'>{props.fileName}</div>
                    <div className='mb-2'>
                        <div>Page: {props.page}</div>
                        <div>File size: {props.size} </div>
                    </div>
                </div>
                <div className='w-3/4 mx-auto text-lg text-center py-2 cursor-pointer rounded-lg bg-gray-500 hover:bg-gray-800 text-gray-50 font-bold'>
                    <a href={props.link} download className='block'>Download</a>
                </div>
            </div>
        </div>
    );
};

export default StudyMaterialsCard;