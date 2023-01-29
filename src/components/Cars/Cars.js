import {Car} from "./Car";

const Cars = ({car, setUpdateCar, setCar}) => {

        return (
            <div>
                {car.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setCar={setCar}/>)}
            </div>
        );
};

export {Cars};