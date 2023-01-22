import React, {useEffect, useState} from 'react';
import {axiosService} from "../api/axiosService";
import {Launcher} from "./Launcher";

const Launchers = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axiosService.get('/launches')
            .then(value => value.data)
            .then(value => setLaunches([...value]))
    }, [])

        return (
            <div>
                {launches.filter(item => item.launch_year !== '2020')
                .map(item => <Launcher key={item.flight_number} item={item}/>)}
            </div>
        );
};

export {Launchers};