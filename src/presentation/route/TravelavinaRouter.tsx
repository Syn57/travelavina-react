import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../sections/Header';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import DetailPage from '../pages/detail/DetailPage';
import NotFoundPage from '../pages/notfound/NotFoundPages';
import Footer from '../sections/Footer';
import TourPackages from '../pages/tourpackage/TourPackages';
import MicePage from '../pages/mice/MicePage';
import MiceDetailPage from '../pages/micedetail/MiceDetailPage';
import LainnyaPage from '../pages/lainnya/LainnyaPage';
import FAQ from '../pages/faq/FAQ';

const TravelavinaRouter = () => {
    return (
        <Router>
            <Header className='z-20'/>  
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/package" element={<TourPackages />} />
                <Route path="/package/:id" element={<DetailPage />} />
                <Route path="/mice" element={<MicePage />} />
                <Route path="/mice/:type" element={<MiceDetailPage />} />
                <Route path="/other/:type" element={<LainnyaPage />} />
                <Route path="/other/faq" element={<FAQ />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default TravelavinaRouter;