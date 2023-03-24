import React from 'react';

const LoginPageForm = (props) => {
    return (
        <div class="md:h-screen h-2/4 md:w-2/4 w-full bg-slate-50 flex items-center">
            <form
                class="flex flex-col items-center mx-auto rounded-lg shadow-md border border-gray-50 py-8 px-10 bg-white"
                onSubmit={props.handleSubmit}
            >
                <div className="icon text-3xl bg-blue-100 h-16 w-16 flex items-center justify-center rounded-full mb-3">
                    <i className="fa-solid fa-user"></i>
                </div>
                <h1 className='text-3xl font-medium mb-2'>Login</h1>
                <p className='mb-5'>
                    Please enter your ID and Password.
                </p>
                <div class="mb-4 w-full">
                    <input
                        class="appearance-none border-2 border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="userid"
                        type="text"
                        placeholder="User ID"
                    />
                </div>
                <div class="mb-6 w-full">
                    <input
                        class="appearance-none border-2 border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="********"
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPageForm;