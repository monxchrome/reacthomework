import './App.css';
import {UserForm, Users} from "./components";
import {useEffect, useState} from "react";
import {userService} from "./services";

function App() {

    const [user,setUser] = useState([])
    const [updateUser, setUpdateUser] = useState([])

    useEffect(() => {
        userService.getAll()
            .then(({data}) => { setUser([...data])})
    }, [])

  return (
    <div className="App">
      <UserForm setUser={setUser} user={user} updateUser={updateUser}/>
      <hr/>
      <Users user={user} setUpdateUser={setUpdateUser}/>
    </div>
  );
}

export default App;
