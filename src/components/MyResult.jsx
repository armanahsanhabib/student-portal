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
import placeholderImage from '../assets/database/students-image/placeholder-image.jpeg';
import students from '../assets/database/students.json';
import MakrsCard from './MarksCard';
import StudentInfoList from './StudentInfoList';

const MyResult = (props) => {
    const imageSrc = require(`../assets/database/students-image/${props.userId}.jpeg`);
    const cse101Result = cse101.find(user => user.userId === props.userId);
    const cse103Result = cse103.find(user => user.userId === props.userId);
    const cse105Result = cse105.find(user => user.userId === props.userId);
    const math1011Result = math1011.find(user => user.userId === props.userId);
    const phys1014Result = phys1014.find(user => user.userId === props.userId);
    const studentsInfo = students.find(user => user.userId === props.userId);

    const cse101Total = parseInt(cse101Result.ct) + parseInt(cse101Result.asm) + parseInt(cse101Result.atd) + parseInt(cse101Result.mid) + parseInt(cse101Result.final);
    const cse103Total = parseInt(cse103Result.ct) + parseInt(cse103Result.asm) + parseInt(cse103Result.atd) + parseInt(cse103Result.mid) + parseInt(cse103Result.final);
    const cse105Total = parseInt(cse105Result.ct) + parseInt(cse105Result.asm) + parseInt(cse105Result.atd) + parseInt(cse105Result.mid) + parseInt(cse105Result.final);
    const math1011Total = parseInt(math1011Result.ct) + parseInt(math1011Result.asm) + parseInt(math1011Result.atd) + parseInt(math1011Result.mid) + parseInt(math1011Result.final);
    const phys1014Total = parseInt(phys1014Result.ct) + parseInt(phys1014Result.asm) + parseInt(phys1014Result.atd) + parseInt(phys1014Result.mid) + parseInt(phys1014Result.final);
    const cgpa = (parseInt(cse101Result.point) + parseInt(cse103Result.point) + parseInt(cse105Result.point) + parseInt(math1011Result.point) + parseInt(phys1014Result.point)) / 5;

    return (
        <div className='my-3 md:my-5 px-3 md:px-8 mx-auto md:container overflow-y-auto'>
            <section className='flex items-center rounded-lg border shadow-md px-3 py-3 lg:py-5 lg:px-8'>
                <div className='mr-3 lg:mr-5 text-5xl text-orange-500'>
                    <TbTargetArrow />
                </div>
                <div>
                    <h1 className='text-lg lg:text-2xl font-bold mb-0 lg:mb-1'>
                        1st Semester Result
                    </h1>
                    <h2 className='text-sm lg:text-lg text-gray-600'>
                        <span className="font-bold text-green-500">Congratulationss!</span> <span className='font-bold'>{studentsInfo.nickName},</span> You have <span className="font-bold">passed</span> the 1st semester with <span className="font-bold">{cgpa.toFixed(2)}</span> CGPA.
                    </h2>
                </div>
            </section>
            <section className='rounded-lg border shadow-sm py-5 px-5 lg:px-8 mt-5'>
                <h2 className='text-md lg:text-lg font-bold text-gray-600'>
                    Student Information
                </h2>
                <hr className='mt-3 mb-5' />
                <div className='flex justify-between items-start'>
                    <div>
                        <StudentInfoList title="Name" titleValue={studentsInfo.name} iconName={BiUser} />
                        <StudentInfoList title="Student ID" titleValue={studentsInfo.userId} iconName={AiOutlineNumber} />
                        <StudentInfoList title="Section" titleValue={studentsInfo.section} iconName={BiGroup} />
                        <StudentInfoList title="Semester" titleValue="1st Semester" iconName={CgCodeSlash} />
                        <StudentInfoList title="Program" titleValue="B.Sc. in Computer Science and Engineering" iconName={SlGraduation} />
                        <StudentInfoList title="CGPA" titleValue={cgpa.toFixed(2)} iconName={AiOutlineCalculator} />
                    </div>
                    <div className='hidden lg:block h-48 w-auto rounded-md p-2 bg-gray-50 border'>
                        <img
                            src={imageSrc}
                            onError={(e) => e.target.src = placeholderImage}
                            className="h-full overflow-hidden"
                            alt="stud_image"
                        />
                    </div>
                </div>
            </section>
            <section className='rounded-lg border shadow-sm py-5 px-5 lg:px-8 mt-5'>
                <h2 className='text-md lg:text-lg font-bold text-gray-600'>
                    Details Marksheet
                </h2>
                <hr className='mt-3 mb-5' />
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-8'>
                    <MakrsCard
                        subCode="CSE-101"
                        subName="Computer & Programming"
                        iconName={MdOutlineDesktopWindows}
                        ct={cse101Result.ct}
                        asm={cse101Result.asm}
                        atd={cse101Result.atd}
                        mid={cse101Result.mid}
                        final={cse101Result.final}
                        total={cse101Total}
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
                        total={cse103Total}
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
                        total={cse105Total}
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
                        total={math1011Total}
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
                        total={phys1014Total}
                        grade={phys1014Result.grade}
                        point={phys1014Result.point}
                    />
                    <MakrsCard
                        subCode="CSE-101"
                        subName="Computer & Programming"
                        iconName={MdOutlineDesktopWindows}
                        ct={cse101Result.ct}
                        asm={cse101Result.asm}
                        atd={cse101Result.atd}
                        mid={cse101Result.mid}
                        final={cse101Result.final}
                        total={cse101Total}
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
                        total={cse103Total}
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
                        total={cse105Total}
                        grade={cse105Result.grade}
                        point={cse105Result.point}
                    />
                </div>
            </section>
        </div>
    );
};

export default MyResult;