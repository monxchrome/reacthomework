import './App.css';
import {Route, Routes} from "react-router-dom";

import {AlbumsPage, CommentsPage, E404, MainPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";
import {PostPage} from "./pages/PostPage/PostPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RequireAuth} from "./hoc/RequireAuth";

function App() {

  return (
      <div>
          <Routes className="App">
              <Route path={'/'} element={<MainLayout/>}>
                  <Route path={'/'} element={<RequireAuth>
                      <MainPage/>
                  </RequireAuth>}/>
                  <Route path={'/todos'} element={<RequireAuth>
                      <TodosPage/>
                  </RequireAuth>}/>
                  <Route path={'/albums'} element={<RequireAuth>
                      <AlbumsPage/>
                  </RequireAuth>}/>
                  <Route path={'/comments'} element={<RequireAuth>
                      <CommentsPage/>
                  </RequireAuth>}/>
                  <Route path={'/login'} element={<LoginPage/>}/>
                  <Route path={'comments/:postId'} element={<PostPage/>}/>
              </Route>

              <Route path={'*'} element={<E404/>}/>

          </Routes>
      </div>
  );
}

export default App;
