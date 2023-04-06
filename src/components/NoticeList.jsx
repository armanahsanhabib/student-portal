import { AiOutlineCalendar } from 'react-icons/ai';
import { BiNotification } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';

const NoticeList = (props) => {
    return (
        <section className='rounded-lg border shadow-sm py-5 px-8'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center text-3xl font-bold text-purple-600'>
                    <BiNotification className='mr-2' />
                    <h1 className='text-xl font-bold'>
                        {props.title}
                    </h1>
                </div>
                <div className='flex items-center text-lg text-gray-500'>
                    <AiOutlineCalendar className='mr-2' />
                    {props.date}
                </div>
            </div>
            <hr className='my-3' />
            <div>
                <h2 className='text-lg text-gray-600'>
                    {props.notice}
                </h2>
            </div>
            <div className='flex items-center text-sm font-medium mt-3 text-rose-500 cursor-pointer'>
                <FaDownload className='mr-2' />
                <a href={props.link}>Downlaod Notice</a>
            </div>
        </section>
    );
}

export default NoticeList;