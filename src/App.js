import './App.css';
import {CarForm, Cars} from "./components";
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequireLayout, MainLayout} from "./Layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>

                <Route element={<AuthRequireLayout/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>

        </Routes>
    );
}

export default App;
