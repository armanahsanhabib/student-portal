const MakrsCard = (props) => {
    return (
        <div className='w-full flex justify-center rounded-lg bg-gray-100 py-6 px-5'>
            <div className='w-max w-18 flex flex-col justify-between'>
                <div>
                    <h2 className='text-lg font-bold text-slate-600 text-center'>{props.subCode}</h2>
                    <h3 className='text-sm text-gray-400 text-center'>{props.subName}</h3>
                </div>
                <div className="icon text-2xl bg-indigo-100 h-14 w-14 flex items-center justify-center rounded-full my-3 mx-auto">
                    <props.iconName />
                </div>
                <div>
                    <hr className='mb-3' />
                    <div className="flex items-center justify-between mb-2">
                        <div className='flex items-center text-sm'><span className='mr-1'>CT = </span><span>{props.ct}</span></div>
                        <div className='flex items-center text-sm text-gray-300'>|</div>
                        <div className='flex items-center text-sm'><span className='mr-1'>ASM = </span><span>{props.asm}</span></div>
                        <div className='flex items-center text-sm text-gray-300'>|</div>
                        <div className='flex items-center text-sm'><span className='mr-1'>ATD = </span><span>{props.atd}</span></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className='flex items-center text-sm'><span className='mr-1'>Mid Exam = </span><span>{props.mid}</span></div>
                        <div className='flex items-center text-sm text-gray-300 mx-3'>|</div>
                        <div className='flex items-center text-sm'><span className='mr-1'>Final Exam = </span><span>{props.final}</span></div>
                    </div>
                    <hr className='my-3' />
                    <div className="flex items-center justify-between">
                        <div className='flex items-center text-md font-bold'><span className='mr-1'>Total = </span><span>{props.total}</span></div>
                        <div className='flex items-center text-md font-bold text-gray-300'>|</div>
                        <div className='flex items-center text-md font-bold'><span className='mr-1'>Point = </span><span>{props.point}</span></div>
                    </div>
                    <hr className='my-3' />
                    <div className="flex items-center justify-between">
                        <div className='text-md mx-auto font-bold text-indigo-600'><span className='mr-1'>Grade: </span><span>{props.grade}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MakrsCard;