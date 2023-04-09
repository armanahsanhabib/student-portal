const StudentInfoList = (props) => {
    return (
        <h3 className='flex items-center mb-3 text-sm lg:text-lg text-gray-600'>
            <span><props.iconName className='mr-3 lg:mr-5' /></span>
            <span className='shrink-0 w-24 lg:w-28 font-bold'>{props.title}:</span>
            <span>{props.titleValue}</span>
        </h3>
    );
}

export default StudentInfoList;