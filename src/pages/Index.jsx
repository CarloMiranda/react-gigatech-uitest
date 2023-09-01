import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";

function Index() {

    return (
        // <Layout />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>   
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index;