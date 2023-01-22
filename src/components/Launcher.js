import React from 'react';

const Launcher = ({item}) => {
    const {mission_name, launch_year} = item
    const {mission_patch_small} = item.links

        return (
            <div>
                <div>
                    <img src={mission_patch_small} alt="" />
                </div>
                <div>
                    <p>{mission_name}</p>
                </div>
                <div>
                    <p>{launch_year}</p>
                </div>
            </div>
        );
};

export {Launcher};