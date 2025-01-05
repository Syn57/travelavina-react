import React from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../component/sections/NavigationBar";

const DetailPage = () => {
    const { type } = useParams<{ type: string }>();
    return (
        <div className="relative">
            <NavigationBar />
            <div>
                <h1>Detail Page</h1>
                <p>Route Parameter: {type}</p>
            </div>
        </div>
    );
};

export default DetailPage;