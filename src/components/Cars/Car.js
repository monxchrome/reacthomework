import React from 'react';
import {carService} from "../../services";

const Car = ({car, setUpdateCar, setCar}) => {
    const {id, brand, price, year} = car

        return (
            <div>
                <div>
                    <h3>
                        {brand}
                    </h3>
                </div>
                <div>
                    <h4>
                        {price}
                    </h4>
                </div>
                <div>
                    <p>
                        {year}
                    </p>
                </div>
                <button onClick={()=> setUpdateCar(car)}>Update</button>
                <button onClick={() =>{
                    const {data} = carService.deleteById(id)
                        .then(async () => {
                           const {data} = await carService.getAll();
                           setCar([...data])
                        }).catch(err => console.log(err))

                }}>Delete</button>
            </div>
        );
};

export {Car};