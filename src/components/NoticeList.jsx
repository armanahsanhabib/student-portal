const NoticeList = (props) => {
    return (
        <section className='flex items-center rounded-lg border shadow-sm py-5 px-8 mb-5'>
            <div className='text-3xl mr-5 font-bold text-center bg-green-500 py-2 px-5 rounded-lg text-gray-50'>
                {/* <BsBell className='text-5xl' /> */}
                {props.date} <br /> {props.month}
            </div>
            <div>
                <h1 className='text-xl font-bold mb-1'>
                    {props.title}
                </h1>
                <h2 className='text-lg text-gray-600'>
                    {props.description}
                </h2>
            </div>
        </section>
    );
}

export default NoticeList;