import React from 'react';

const Post = ({post, setPostDetails}) => {
    const {title} = post;
        return (
            <div>
                <div>
                    <p>Title: {title}</p>
                </div>
                <div>
                    <button onClick={() => setPostDetails(post)}>Test</button>
                </div>
            </div>
        );
};

export {Post};