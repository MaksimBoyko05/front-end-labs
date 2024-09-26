import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const { id } = useParams();

    const users = [
        { id: '1', name: 'Bob' },
        { id: '2', name: 'David' },
        { id: '3', name: 'Max' },
    ];


    const user = users.find(user => user.id === id);

    return (
        <div>
            <h1>User Details Page</h1>
            {user ? (
                <>
                 <p>User Name: {user.name}</p>
                    <p>User ID: {user.id}</p>
                   
                </>
            ) : (
                <p>User not found.</p>
            )}
        </div>
    );
};

export default UserDetails;