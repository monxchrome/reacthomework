import React from 'react';

const Post = ({post}) => {
    const {title, body} = post
        return (
            <div>

            <div>
                <h2>
                    Title:{title}
                </h2>
            </div>
                <div>
                    <p>
                        body: {body}
                    </p>
                </div>
            </div>
        );
};

export {Post};