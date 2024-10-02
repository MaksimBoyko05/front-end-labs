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
        <div class="users_dt">
            <h1>User Details Page</h1>
            {user ? (
                <>
                 <p>User Name: {user.name}</p>
                    <p>User ID: {user.id}</p>
                   
                </>
            ) : (
                <p>404</p>
            )}
        </div>
    );
};

export default UserDetails;