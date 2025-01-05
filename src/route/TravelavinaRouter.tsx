import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationBar from '../component/sections/NavigationBar';
import HomePage from '../pages/home/HomePage';
import DetailPage from '../pages/detail/DetailPage';
import AboutPage from '../pages/about/AboutPage';
import NotFoundPage from '../pages/notfound/NotFoundPages';
import Header from '../component/sections/Header';


const TravelavinaRouter = () => {
    return (
        <Router>
            <Header className='z-20'/>  
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/detail/:type" element={<DetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default TravelavinaRouter;