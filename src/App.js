import './App.css';
import {useReducer} from "react";
import {CatForm, Cats} from "./components";
import {DogForm} from "./components/Dogs/DogForm";
import {Dogs} from "./components/Dogs/Dogs";

function App() {

  return (
    <div className="App">
      Cats: <CatForm/>
        Dogs: <DogForm/>
      <hr/>
      <Cats/>
        <Dogs/>
    </div>
  );
}

export default App;
