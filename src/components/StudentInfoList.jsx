const StudentInfoList = (props) => {
    return (
        <h3 className='flex items-center mb-3 text-lg text-gray-600'>
            <span><props.iconName className='mr-5' /></span>
            <span className='w-28 font-bold'>{props.title}:</span>
            <span>{props.titleValue}</span>
        </h3>
    );
}

export default StudentInfoList;