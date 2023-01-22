import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user
        return (
            <div>
            <div>
                <h1>
                    Name: {name}
                </h1>
            </div>
                <div>
                    <h2>
                        Username: {username}
                    </h2>
                </div>
                <div>
                    <h3>
                        Email: {email}
                    </h3>
                </div>
                <div>
                    <h4>
                        ID: {id}
                    </h4>
                </div>
            </div>
        );
};

export {User};