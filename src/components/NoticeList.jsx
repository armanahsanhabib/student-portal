import { BsCalendarDate } from 'react-icons/bs';
// import { FaDownload } from 'react-icons/fa';

const NoticeList = (props) => {
    return (
        <section className='rounded-lg border shadow-sm py-5 px-5 lg:px-8'>
            <div className='block lg:flex justify-between items-center'>
                <div className='flex items-center text-2xl lg:text-3xl font-bold text-purple-600'>
                    <h1 className='text-sm lg:text-xl font-bold'>
                        {props.title}
                    </h1>
                </div>
                <div className='flex items-center text-xs lg:text-lg text-gray-500 mt-2 lg:mt-0'>
                    <BsCalendarDate className='mr-2' />
                    {props.date}
                </div>
            </div>
            <hr className='my-3' />
            <div>
                <h2 className='text-sm lg:text-lg text-gray-600'>
                    {props.notice}
                </h2>
            </div>
            {/*             <div className='flex items-center text-xs lg:text-sm font-medium mt-3 text-rose-500 cursor-pointer'>
                <FaDownload className='mr-2' />
                <a href={props.link}>Downlaod Notice</a>
            </div> */}
        </section>
    );
}

export default NoticeList;