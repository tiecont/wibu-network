import { Route, Routes } from 'react-router-dom';
import Home from '../pages';
import Phimvlxx from '../pages/phimvlxx/phimvlxx';

const RouterController = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/phimvlxx' element={<Phimvlxx />} />
        </Routes>
    )
}

export default RouterController