import React, { useEffect, useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardTopbar from '../components/DashboardTopbar';
import MyResult from '../components/MyResult';
import NoticeBoard from '../components/NoticeBoard';
import ProfileDetails from '../components/ProfileDetails';
import StudyMaterials from '../components/StudyMaterials';
import VideoTutorials from '../components/VideoTutorials';

const Dashboard = (props) => {
    const [activeComponent, setActiveComponent] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setActiveComponent('profile');
    }, [])

    const handleNavClick = (componentName) => {
        setActiveComponent(componentName);
        setIsOpen(!isOpen);
    }

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <div className='block lg:grid grid-cols-2' style={{ gridTemplateColumns: "320px 1fr" }}>
            <DashboardSidebar handleLogOut={props.handleLogOut} handleNavClick={handleNavClick} isOpen={isOpen} />
            <DashboardTopbar handleLogOut={props.handleLogOut} handleMenuClick={handleMenuClick} isOpen={isOpen} />
            {activeComponent === 'profile' && <ProfileDetails userId={props.userId} />}
            {activeComponent === 'notice' && <NoticeBoard />}
            {activeComponent === 'result' && <MyResult userId={props.userId} />}
            {activeComponent === 'study' && <StudyMaterials />}
            {activeComponent === 'video' && <VideoTutorials />}
        </div>
    );
};

export default Dashboard;
