import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/home';
let AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>

            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;