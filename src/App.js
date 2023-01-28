import './App.css';
import {useEffect, useState} from "react";

import {CommentForm, Comments} from "./components";
import {commentService} from "./services";

function App() {

    const [comment, setComment] = useState([])

    useEffect(() => {
        commentService.getAll()
            .then(({data}) => setComment([...data]))
    }, [])

  return (
    <div className="App">
      <CommentForm setComment={setComment}/>

      <hr/>

      <Comments comment={comment}/>
    </div>
  );
}

export default App;
