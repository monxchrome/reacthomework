import './App.css';

import {Users} from "./components";
import {Posts} from "./components";
import {useState} from "react";

const App = () => {
    const [userId, setUserId] = useState(null)
  return (
    <div className="App">
      <Users setUserId={setUserId}/>
        {userId && <Posts userId={userId}/>}
    </div>
  );
}

export default App;
