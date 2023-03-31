/* import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import ProfileDetails from '../components/ProfileDetails';

const Dashboard = (props) => {
    return (
        <div className='grid grid-cols-2' style={{ gridTemplateColumns: "320px 1fr" }}>
            <DashboardSidebar handleLogOut={props.handleLogOut} />
            <ProfileDetails nickName={props.nickName} userId={props.userId} name={props.name} section={props.section} blood={props.blood} mobile={props.mobile} email={props.email} />
        </div>
    );
};

export default Dashboard;
 */

import React, { useEffect, useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
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

    return (
        <div className='grid grid-cols-2' style={{ gridTemplateColumns: "320px 1fr" }}>
            <DashboardSidebar handleLogOut={props.handleLogOut} handleNavClick={handleNavClick} />
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
