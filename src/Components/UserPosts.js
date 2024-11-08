import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_POSTS } from '../GetUserPosts';
import './UserPosts.css';

const UserPosts = ({userId}) => {

    const { loading, error, data } = useQuery(GET_USER_POSTS, {
        variables: { id: userId }, 
    });

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="user-posts-container">
            <h2>Posts of User {userId}</h2>
            <ul className="user-posts-list">
                {data?.user?.posts?.data?.map((post) => (
                    <li key={post.id} className="user-post-item">
                        <p><strong>Post ID:</strong> {post.id}</p>
                        <p><strong>Title:</strong> {post.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;
