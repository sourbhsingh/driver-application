import React, { useEffect } from "react";

const CategoriesPage: React.FC = () => {

    useEffect(() => {
        document.title = "Categories";
    }, []);

    return (
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c333">Categories</h1>
        </div>
    );
};

export default CategoriesPage;
