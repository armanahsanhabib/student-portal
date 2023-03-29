import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import ProfileDetails from '../components/ProfileDetails';

const Dashboard = (props) => {
    return (
        <div className='grid grid-cols-2' style={{ gridTemplateColumns: "320px 1fr" }}>
            <DashboardSidebar />
            <ProfileDetails nickName={props.nickName} userId={props.userId} />
        </div>
    );
};

export default Dashboard;
