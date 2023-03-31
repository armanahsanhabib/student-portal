import React from 'react';
import { AiOutlineCalculator, AiOutlineNumber } from 'react-icons/ai';
import { BiAtom, BiGroup, BiUser } from 'react-icons/bi';
import { BsCodeSlash, BsCpu } from 'react-icons/bs';
import { CgCodeSlash } from 'react-icons/cg';
import { MdOutlineDesktopWindows } from 'react-icons/md';
import { SlGraduation } from 'react-icons/sl';
import { TbTargetArrow } from 'react-icons/tb';
import cse101 from '../assets/database/result/cse101.json';
import cse103 from '../assets/database/result/cse103.json';
import cse105 from '../assets/database/result/cse105.json';
import math1011 from '../assets/database/result/math1011.json';
import phys1014 from '../assets/database/result/phys1014.json';
import students from '../assets/database/students.json';


const StudentInfoList = (props) => {
    return (
        <h3 className='flex items-center mb-3 text-lg text-gray-600'>
            <span><props.iconName className='mr-5' /></span>
            <span className='w-28 font-bold'>{props.title}:</span>
            <span>{props.titleValue}</span>
        </h3>
    );
}

const MakrsCard = (props) => {
    return (
        <div className='rounded-lg bg-gray-100 p-4 flex flex-col justify-between'>
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
                    <div className='flex items-center text-sm text-gray-300'>|</div>
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
    );
}

const MyResult = (props) => {
    const imageSrc = require(`../assets/database/students-image/${props.userId}.jpeg`);
    // const imageSrc = require(`../assets/database/students-image/12311033.jpeg`);
    const cse101Result = cse101.find(user => user.userId === props.userId);
    const cse103Result = cse103.find(user => user.userId === props.userId);
    const cse105Result = cse105.find(user => user.userId === props.userId);
    const math1011Result = math1011.find(user => user.userId === props.userId);
    const phys1014Result = phys1014.find(user => user.userId === props.userId);
    const studentsInfo = students.find(user => user.userId === props.userId);
    const cgpa = (parseInt(cse101Result.point) + parseInt(cse103Result.point) + parseInt(cse105Result.point) + parseInt(math1011Result.point) + parseInt(phys1014Result.point)) / 5;

    return (
        <div className='my-8 px-8 mx-auto overflow-y-auto' style={{ width: "1200px" }}>
            <section className='flex items-center rounded-lg border shadow-md py-5 px-8'>
                <div className='mr-5 text-5xl text-orange-500'>
                    <TbTargetArrow />
                </div>
                <div>
                    <h1 className='text-2xl font-bold mb-1'>
                        1st Semester Result
                    </h1>
                    <h2 className='text-lg text-gray-600'>
                        <span className="font-bold text-green-500">Congratulationss!</span> <span className='font-bold'>{studentsInfo.nickName},</span> You have <span className="font-bold">passed</span> the 1st semester with <span className="font-bold">{cgpa.toFixed(2)}</span> CGPA.
                    </h2>
                </div>
            </section>
            <section className='rounded-lg border shadow-sm py-5 px-8 mt-5'>
                <h2 className='text-lg font-bold text-gray-600'>
                    Student Information
                </h2>
                <hr className='mt-3 mb-5' />
                <div className='flex justify-between items-start'>
                    <div>
                        <div className=''>
                            <StudentInfoList title="Name" titleValue={studentsInfo.name} iconName={BiUser} />
                            <StudentInfoList title="Student ID" titleValue={studentsInfo.userId} iconName={AiOutlineNumber} />
                            <StudentInfoList title="Section" titleValue={studentsInfo.section} iconName={BiGroup} />
                            <StudentInfoList title="Semester" titleValue="1st Semester" iconName={CgCodeSlash} />
                            <StudentInfoList title="Program" titleValue="B.Sc. in Computer Science and Engineering" iconName={SlGraduation} />
                            <StudentInfoList title="CGPA" titleValue={cgpa.toFixed(2)} iconName={AiOutlineCalculator} />
                        </div>
                    </div>
                    <div className='h-48 w-auto rounded-md p-2 bg-gray-50 border'>
                        <img src={imageSrc} className="h-full overflow-hidden" alt="stud_image" />
                    </div>
                </div>
            </section>
            <section className='rounded-lg border shadow-sm py-5 px-8 mt-5'>
                <h2 className='text-lg font-bold text-gray-600'>
                    Details Marksheet
                </h2>
                <hr className='mt-3 mb-5' />
                <div className='grid grid-cols-4 gap-8'>
                    <MakrsCard
                        subCode="CSE-101"
                        subName="Computer & Programming"
                        iconName={MdOutlineDesktopWindows}
                        ct={cse101Result.ct}
                        asm={cse101Result.asm}
                        atd={cse101Result.atd}
                        mid={cse101Result.mid}
                        final={cse101Result.final}
                        total={cse101Result.total}
                        grade={cse101Result.grade}
                        point={cse101Result.point}
                    />
                    <MakrsCard
                        subCode="CSE-103"
                        subName="Structured Programming"
                        iconName={BsCodeSlash}
                        ct={cse103Result.ct}
                        asm={cse103Result.asm}
                        atd={cse103Result.atd}
                        mid={cse103Result.mid}
                        final={cse103Result.final}
                        total={cse103Result.total}
                        grade={cse103Result.grade}
                        point={cse103Result.point}
                    />
                    <MakrsCard
                        subCode="CSE-105"
                        subName="Electrical Circuits"
                        iconName={BsCpu}
                        ct={cse105Result.ct}
                        asm={cse105Result.asm}
                        atd={cse105Result.atd}
                        mid={cse105Result.mid}
                        final={cse105Result.final}
                        total={cse105Result.total}
                        grade={cse105Result.grade}
                        point={cse105Result.point}
                    />
                    <MakrsCard
                        subCode="MATH-I-1011"
                        subName="Mathematics-I"
                        iconName={AiOutlineCalculator}
                        ct={math1011Result.ct}
                        asm={math1011Result.asm}
                        atd={math1011Result.atd}
                        mid={math1011Result.mid}
                        final={math1011Result.final}
                        total={math1011Result.total}
                        grade={math1011Result.grade}
                        point={math1011Result.point}
                    />
                    <MakrsCard
                        subCode="PHYS-1014"
                        subName="Physics"
                        iconName={BiAtom}
                        ct={phys1014Result.ct}
                        asm={phys1014Result.asm}
                        atd={phys1014Result.atd}
                        mid={phys1014Result.mid}
                        final={phys1014Result.final}
                        total={phys1014Result.total}
                        grade={phys1014Result.grade}
                        point={phys1014Result.point}
                    />
                </div>
            </section>
        </div>
    );
};

export default MyResult;