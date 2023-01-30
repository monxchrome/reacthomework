import './App.css';
import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";

function App() {

    const [car,setCar] = useState([])
    const [updateCar, setUpdateCar] = useState()

    useEffect(() => {
        carService.getAll()
            .then(({data}) => { setCar([...data])})
    }, [])

  return (
    <div className="App">
      <CarForm setCar={setCar} updateCar={updateCar}/>
      <hr/>
      <Cars car={car} setUpdateCar={setUpdateCar} setCar={setCar}/>
    </div>
  );
}

export default App;
