import { Link } from 'react-router-dom';
import NavigationBar from '../../sections/NavigationBar';

const NotFoundPage: React.FC = () => {
    return (
        <>
            <NavigationBar />
            <div className="flex flex-grow items-center justify-center text-center bg-gray-100 p-4">
            <div>
                <h1 className="text-6xl font-bold text-black">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mt-2">Oops, This Page Not Found!</h2>
                <p className="text-gray-500 mt-2">or the page may have been removed</p>
                <Link
                    to="/"
                    className="mt-6 px-6 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition"
                >
                    GO BACK HOME
                </Link>
            </div>
        </div>
        </>
    );
};

export default NotFoundPage;