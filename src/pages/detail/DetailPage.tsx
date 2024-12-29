import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const { type } = useParams<{ type: string }>();

    return (
        <div>
            <h1>Detail Page</h1>
            <p>Route Parameter: {type}</p>
        </div>
    );
};

export default DetailPage;