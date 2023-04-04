const ProfileDetailsList = (props) => {
    return (
        <h3 className='flex items-center mb-3 text-sm md:text-lg text-gray-600'>
            <span><props.iconName className='mr-3 md:mr-5' /></span>
            <span className='w-20 shrink-0 md:w-28 font-bold'>{props.title}:</span>
            <span className=''>{props.titleValue}</span>
        </h3>
    );
}

export default ProfileDetailsList;