import React from 'react';
import thumbnail_image from '../assets/images/thumbnail.png';
import VideoTutorialsCard from './VideoTutorialsCard';
import VideoTutorialsSection from './VideoTutorialsSection';

const videoTutorials = [
    {
        sectionName: "CSE-101: Introduction of computer and programming",
        cards: [
            {
                thumbnail: thumbnail_image,
                title: "CV Design Class | SCSE-101 | Al-Amin Sir",
                description: "Video Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, provident.",
                link: "https://www.youtube.com/embed/ABmJKpUTJuY"
            },
            {
                thumbnail: thumbnail_image,
                title: "Microsoft Office Class 01 | SCSE-101 | Al-Amin Sir",
                description: "Video Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, provident.",
                link: "https://youtu.be/ABmJKpUTJuY"
            },
            {
                thumbnail: thumbnail_image,
                title: "Microsoft Excel Class 01 | SCSE-101 | Al-Amin Sir",
                description: "Video Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, provident.",
                link: "https://youtu.be/ABmJKpUTJuY"
            },
        ]
    },
    {
        sectionName: "CSE-103: Structured programming | Razzak Sir",
        cards: [
            {
                thumbnail: thumbnail_image,
                title: "Computer Operation CV Design Class | SCSE-101 | Al-Amin Sir",
                description: "Video Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, provident.",
                link: "https://youtu.be/ABmJKpUTJuY"
            },
            {
                thumbnail: thumbnail_image,
                title: "Computer Operation CV Design Class | SCSE-101 | Al-Amin Sir",
                description: "Video Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, provident.",
                link: "https://youtu.be/ABmJKpUTJuY"
            }
        ]
    },
];

const VideoTutorials = () => {
    return (
        <div className='px-3 py-8 md:px-8 mx-auto md:container'>
            <div className='grid grid-cols-1 lg:grid-cols-1 gap-8'>
                {videoTutorials.map((section, index) => (
                    <VideoTutorialsSection
                        key={index}
                        sectionName={section.sectionName}
                        videoTutorialsCard={section.cards.map((card, index) => (
                            <VideoTutorialsCard
                                key={index}
                                thumbnail={card.thumbnail}
                                title={card.title}
                                description={card.description}
                                link={card.link}
                            />
                        ))}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoTutorials;