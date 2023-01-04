import './App.scss';
import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import {OwnIDInit} from '@ownid/react';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import NotFound from './components/NotFound/NotFound';
import Account from './components/Account/Account';

function App() {
    return (
        <div className="App">
            <OwnIDInit config={{
                appId: '{app_id}', // TODO: add your app id here from your OwnID console app (you can use your snippet) https://console.ownid.com/
            }}/>
            <Routes>
                <Route
                    path='/'
                    element={<LoginForm/>}
                />
                <Route
                    path='/login'
                    element={<LoginForm/>}
                />
                <Route
                    path='/register'
                    element={<RegisterForm/>}
                />
                <Route
                    path='/account'
                    element={<Account/>}
                />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
