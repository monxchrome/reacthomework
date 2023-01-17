import React from 'react';

export const Simpson = ({url, title, description}) => {
    return (
        <div className='pic-div'>
            <img className='pic' src={url} alt=""/>
            <div className='title-div'>
                <h2 className='title'>{title}</h2>
            </div>
            <div className='desc-div'>
                <p className='desc'>{description}</p>
            </div>
        </div>
    );
}