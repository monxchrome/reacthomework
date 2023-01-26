import React from 'react';

const User = ({user}) => {
    const {name, username, email} = user
        return (
            <div>
            <div>
                <h3>
                    {name}
                </h3>
            </div>
                <div>
                    <h4>
                        {username}
                    </h4>
                </div>
                <div>
                    <p>
                        {email}
                    </p>
                </div>
            </div>
        );
};

export {User};