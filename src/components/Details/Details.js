import React from 'react';

const Details = ({postDetails}) => {
        return (
            <div>
                <h1>Post Details:</h1>
                {postDetails &&
                    <div>
                        <div>
                            Title: {postDetails.title}
                        </div>
                        <div>
                            Body: {postDetails.body}
                        </div>
                    </div>
                }
            </div>
        );
};

export {Details};