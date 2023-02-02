import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {AlbumsPage, CommentsPage, E404, MainPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";
import {PostPage} from "./pages/PostPage/PostPage";
import {Users} from "./pages/UsersPage/Users";
import {Detail} from "./pages/DetailsPage/Detail";

function App() {

    return (
        <div>
            <Routes className="App">
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/home'}/>}/>
                    <Route path={'/home'} element={<MainPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/albums'} element={<AlbumsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/details'} element={<Detail/>}/>
                    <Route path={'comments/:postId'} element={<PostPage/>}/>
                </Route>

                <Route path={'*'} element={<E404/>}/>

            </Routes>
        </div>
    );
}

export default App;