import { Link } from 'react-router-dom';
import NavigationBar from '../../sections/NavigationBar';

const NotFoundPage = () => {
    return (
        <div className='relative'>
            <NavigationBar />
            <div>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link to="/">Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;