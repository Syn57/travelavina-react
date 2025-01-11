import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../sections/Header';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import DetailPage from '../pages/detail/DetailPage';
import NotFoundPage from '../pages/notfound/NotFoundPages';
import Footer from '../sections/Footer';
import TourPackages from '../pages/tourpackage/TourPackages';

const TravelavinaRouter = () => {
    return (
        <Router>
            <Header className='z-20'/>  
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/tour-packages" element={<TourPackages />} />
                <Route path="/detail/:type" element={<DetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default TravelavinaRouter;