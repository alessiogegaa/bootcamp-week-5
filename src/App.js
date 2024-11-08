// src/App.js
import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import User from './Components/User';
import UserList from './Components/UserList';
import './App.css';

function App() {
    const [showAllUsers, setShowAllUsers] = useState(false);

    return (
        <ApolloProvider client={client}>
            <div className="app-container">
                <h1 className="app-heading">React GraphQL Sample App</h1>
                <div className="button-group">
                    <button 
                        onClick={() => setShowAllUsers(false)} 
                        className={`toggle-button ${!showAllUsers ? 'active' : ''}`}
                    >
                        Show Single User
                    </button>
                    <button 
                        onClick={() => setShowAllUsers(true)} 
                        className={`toggle-button ${showAllUsers ? 'active' : ''}`}
                    >
                        Show All Users
                    </button>
                </div>
                <div className="content">
                    {showAllUsers ? <UserList /> : <User />}
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;
