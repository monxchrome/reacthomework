import './App.css';
import {UserForm, Users} from "./components";
import {useEffect, useState} from "react";
import {usersService} from "./service";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll()
            .then(value => value.data)
            .then(value => setUsers([...value]))
    }, [])

  return (
    <div className="App">
      <UserForm setUsers={setUsers}/>

      <hr/>

      <Users users={users}/>
    </div>
  );
}

export default App;
