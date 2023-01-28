import React from 'react';

const Comment = ({comment}) => {
    const {name, body} = comment

        return (

            <div>
                <div>
                    <h4>
                        {name}
                    </h4>
                </div>

                <div>
                    <p>
                        {body}
                    </p>
                </div>

            </div>
        );
};

export {Comment};