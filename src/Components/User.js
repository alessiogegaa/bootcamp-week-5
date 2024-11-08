import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../GetUser';
import './User.css';
import UserPosts from './UserPosts';

const User = () => {
    const [userId, setUserId] = useState(1);

    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: userId },
        skip: !userId,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const user = data?.user;

    return (
        <div className="user-container">
            <h2 className="user-heading">User Information</h2>
            <div className="input-group">
                <label>
                    User ID:
                    <input
                        type="number"
                        value={userId || ''}
                        onChange={(e) => {
                            const id = parseInt(e.target.value) || '';
                            setUserId(id);
                        }}
                        min="1"
                        className="input-field"
                    />
                </label>
            </div>
            {user && (
                <>
                <div className="user-info">
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
                <UserPosts userId={userId}/>
                </>
            )}
        </div>
    );
};

export default User;
