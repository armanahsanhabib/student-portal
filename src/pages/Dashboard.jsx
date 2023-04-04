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

    useEffect(() => {
        setActiveComponent('profile');
    }, [])

    const handleNavClick = (componentName) => {
        setActiveComponent(componentName);
    }

    const handleResponsiveNavbar = () => {
        const sidebar = document.getElementById('sidebar');

        sidebar.classList.toggle('hidden');
        sidebar.classList.toggle('sticky');

        console.log('clicked');
    }

    return (
        <div className='block lg:grid grid-cols-2' style={{ gridTemplateColumns: "320px 1fr" }}>
            <DashboardSidebar handleLogOut={props.handleLogOut} handleNavClick={handleNavClick} />
            <DashboardTopbar handleLogOut={props.handleLogOut} handleResponsiveNavbar={handleResponsiveNavbar} />
            {
                activeComponent === 'profile' &&
                <ProfileDetails
                    userId={props.userId}
                />
            }
            {
                activeComponent === 'notice' &&
                <NoticeBoard />
            }
            {
                activeComponent === 'result' &&
                <MyResult
                    userId={props.userId}
                />
            }
            {
                activeComponent === 'study' &&
                <StudyMaterials />
            }
            {
                activeComponent === 'video' &&
                <VideoTutorials />
            }
        </div>
    );
};

export default Dashboard;
