import React from 'react';

const RenderForm = (props) => {
    return (
        <div className="form">
            <form>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {props.renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {props.renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
};

export default RenderForm;