import React from 'react';

const User = ({user, setUpdateUser}) => {
    const {name, username, email} = user

        return (
            <div>
                <div>
                    <h3>
                        {username}
                    </h3>
                </div>
                <div>
                    <h4>
                        {name}
                    </h4>
                </div>
                <div>
                    <p>
                        {email}
                    </p>
                </div>
                <button onClick={()=> setUpdateUser(user)}>Update</button>
                <button>Delete</button>
            </div>
        );
};

export {User};