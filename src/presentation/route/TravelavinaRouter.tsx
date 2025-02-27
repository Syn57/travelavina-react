import { BrowserRouter 
    as 
    Router, Route, Routes 
} from 'react-router-dom'
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
import Disclaimer from '../pages/tnc/Disclaimer';
import PrivacyPolicy from '../pages/tnc/PrivacyPolicy';
import TermsOfUse from '../pages/tnc/TermOfUse';

const TravelavinaRouter = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className='flex-1 flex flex-col h-full'>
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
                        <Route path="/disclaimer" element={<Disclaimer />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/term-of-use" element={<TermsOfUse />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </div>
    );
}

export default TravelavinaRouter;