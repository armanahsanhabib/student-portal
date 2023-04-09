import React from 'react';
import LoginPageBg from '../components/LoginPageBg';
import LoginPageForm from '../components/LoginPageForm';

const LoginPage = (props) => {
    return (
        <div className='block h-full md:flex md:flex-row md:h-screen'>
            <LoginPageBg />
            <LoginPageForm handleSubmit={props.handleSubmit} />
        </div>
    );
};

export default LoginPage;