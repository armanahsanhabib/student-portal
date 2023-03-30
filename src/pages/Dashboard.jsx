import React from 'react';
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
