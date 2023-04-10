import React from 'react';
import cse101_midterm from '../assets/study-materials/cse101/Mid Term Lecture Sheet.pdf';
import cse101_midterm_suggestion from '../assets/study-materials/cse101/suggestion mid.pdf';
import cse103_midterm from '../assets/study-materials/cse103/Mid sheet.pdf';
import cse105_assignment from '../assets/study-materials/cse105/Assignment 1st semester.pdf';
import cse105_midterm from '../assets/study-materials/cse105/Lecture sheet mid term.pdf';
import cse105_final from '../assets/study-materials/cse105/Lecture sheet semester final.pdf';
import cse105_semesterplan from '../assets/study-materials/cse105/Lesson Plan.pdf';
import ielc_sheet1 from '../assets/study-materials/ielc101/sheet (1).pdf';
import ielc_sheet10 from '../assets/study-materials/ielc101/sheet (10).pdf';
import ielc_sheet11 from '../assets/study-materials/ielc101/sheet (11).pdf';
import ielc_sheet2 from '../assets/study-materials/ielc101/sheet (2).pdf';
import ielc_sheet3 from '../assets/study-materials/ielc101/sheet (3).pdf';
import ielc_sheet4 from '../assets/study-materials/ielc101/sheet (4).pdf';
import ielc_sheet5 from '../assets/study-materials/ielc101/sheet (5).pdf';
import ielc_sheet6 from '../assets/study-materials/ielc101/sheet (6).pdf';
import ielc_sheet7 from '../assets/study-materials/ielc101/sheet (7).pdf';
import ielc_sheet8 from '../assets/study-materials/ielc101/sheet (8).pdf';
import ielc_sheet9 from '../assets/study-materials/ielc101/sheet (9).pdf';
import math1011_midterm from '../assets/study-materials/math1011/1st Semester Math Sheet DIfferentiation.pdf';
import math1011_mid_assignment from '../assets/study-materials/math1011/Mid Assignment Questions - Differenciation.pdf';
import phys_1014_sheet from '../assets/study-materials/phys1014/1st Semester - Lecture Sheet.pdf';
import scse101_mcq_suggestion from '../assets/study-materials/scse101/Computer Operation MCQ Written Suggestion.pdf';
import scse101_module from '../assets/study-materials/scse101/SCSE 101 - Course Module.pdf';
import scse101_ms_shortcut from '../assets/study-materials/scse101/Shortcut Key of MS Office Application.pdf';
import StudyMaterialsCard from './StudyMaterialsCard';
import StudyMaterialsSection from './StudyMaterialsSection';

const studyMaterials = [
    {
        sectionName: 'CSE-101: Introduction to Computer and Programming (Shaon Sir)',
        cards: [
            {
                fileName: 'Mid Term Lecture Sheet',
                size: '1.54 MB',
                page: '32',
                link: cse101_midterm
            },
            {
                fileName: 'Mid Term Suggestions',
                size: '251 KB',
                page: '4',
                link: cse101_midterm_suggestion
            }
        ]
    },
    {
        sectionName: 'CSE-103: Structured Programming (Razzak Sir)',
        cards: [
            {
                fileName: 'Mid Term Lecture Sheet',
                size: '1.47 MB',
                page: '97',
                link: cse103_midterm
            }
        ]
    },
    {
        sectionName: 'CSE-105: Electrical Circuits (Haidar Sir)',
        cards: [
            {
                fileName: 'Lesson Plan',
                size: '193 KB',
                page: '3',
                link: cse105_semesterplan
            },
            {
                fileName: 'Assignment 1st Semester',
                size: '1.26 MB',
                page: '11',
                link: cse105_assignment
            },
            {
                fileName: 'Mid Term Lecture Sheet',
                size: '8.99 MB',
                page: '93',
                link: cse105_midterm
            },
            {
                fileName: 'Semester Final Lecture Sheet',
                size: '10.4 MB',
                page: '82',
                link: cse105_final
            },
        ]
    },
    {
        sectionName: 'MATH-I-1011: Mathematics-I (Mahbub Sir)',
        cards: [
            {
                fileName: 'Mid Term Lecture Sheet',
                size: '3.74 MB',
                page: '14',
                link: math1011_midterm
            },
            {
                fileName: 'Mid Term Assignment',
                size: '121 KB',
                page: '1',
                link: math1011_mid_assignment
            },
        ]
    },
    {
        sectionName: 'PHYS-1014: Physics (Ruhul Amin)',
        cards: [
            {
                fileName: '1st Semester Lecture Sheet',
                size: '3.71 MB',
                page: '118',
                link: phys_1014_sheet
            },
        ]
    },
    {
        sectionName: 'IELC-101: Intensive English Learning Course (Shamolima Mam)',
        cards: [
            {
                fileName: 'Sheet 1',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet1
            },
            {
                fileName: 'Sheet 2',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet2
            },
            {
                fileName: 'Sheet 3',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet3
            },
            {
                fileName: 'Sheet 4',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet4
            },
            {
                fileName: 'Sheet 5',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet5
            },
            {
                fileName: 'Sheet 6',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet6
            },
            {
                fileName: 'Sheet 7',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet7
            },
            {
                fileName: 'Sheet 8',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet8
            },
            {
                fileName: 'Sheet 9',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet9
            },
            {
                fileName: 'Sheet 10',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet10
            },
            {
                fileName: 'Sheet 11',
                size: 'n?A',
                page: 'n?A',
                link: ielc_sheet11
            },
        ]
    },
    {
        sectionName: 'SCSE-101: Computer Operation (Al-Amin Sir)',
        cards: [
            {
                fileName: 'Course Module',
                size: '2.45 MB',
                page: '7',
                link: scse101_module
            },
            {
                fileName: 'MCQ Written Suggestion',
                size: '647 KB',
                page: '14',
                link: scse101_mcq_suggestion
            },
            {
                fileName: 'Shortcut Key of MS Office',
                size: '651 KB',
                page: '3',
                link: scse101_ms_shortcut
            },
        ]
    }
];

const StudyMaterials = () => {
    return (
        <div className='px-3 py-8 md:px-8 mx-auto md:container'>
            <div className='grid grid-cols-1 lg:grid-cols-1 gap-8'>
                {
                    studyMaterials.map((section, index) => {
                        return (
                            <StudyMaterialsSection
                                key={index}
                                sectionName={section.sectionName}
                                cards={section.cards}
                                studyMaterialsCard={
                                    section.cards.map((card, index) => {
                                        return (
                                            <StudyMaterialsCard
                                                key={index}
                                                fileName={card.fileName}
                                                size={card.size}
                                                page={card.page}
                                                link={card.link}
                                            />
                                        );
                                    })
                                }
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default StudyMaterials; 