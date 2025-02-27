const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-grow items-center justify-center text-center p-4">
            <div>
                <h1 className="text-6xl font-bold text-black">404</h1>
                <h2 className="text-2xl font-semibold mt-2">Oops, This Page Not Found!</h2>
                <p className="text-gray-500 mt-2 mb-6">or the page may have been removed</p>
                <a href="/"
                   className="mt-10 px-6 py-2 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800">
                    GO BACK HOME
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;