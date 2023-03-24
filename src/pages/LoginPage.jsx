import React from 'react';
import LoginPageBg from '../components/LoginPageBg';
import LoginPageForm from '../components/LoginPageForm';

const LoginPage = (props) => {
    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <LoginPageBg />
            <LoginPageForm handleSubmit={props.handleSubmit} />
        </div>
    );
};

export default LoginPage;