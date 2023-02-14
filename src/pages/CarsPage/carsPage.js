import React from 'react';
import {CarForm, Cars} from "../../components";

const CarsPage = () => {
        return (
            <div className="App">
                <CarForm/>
                <br/>
                <Cars/>
            </div>
        );
};

export {CarsPage};