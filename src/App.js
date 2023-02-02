import './App.css';
import {Route, Routes} from "react-router-dom";
import {AlbumsPage, CommentsPage, E404, MainPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";
import {PostPage} from "./pages/PostPage/PostPage";
import {useState} from "react";

function App() {
  return (
      <div>
          <Routes className="App">
              <Route path={'/'} element={<MainLayout/>}>
                  <Route path={'/'} element={<MainPage/>}/>
                  <Route path={'/todos'} element={<TodosPage/>}/>
                  <Route path={'/albums'} element={<AlbumsPage/>}/>
                  <Route path={'/comments'} element={<CommentsPage/>}/>
                  <Route path={'comments/:postId'} element={<PostPage/>}/>
              </Route>
              <Route path={'*'} element={<E404/>}/>
          </Routes>
      </div>
  );
}

export default App;
