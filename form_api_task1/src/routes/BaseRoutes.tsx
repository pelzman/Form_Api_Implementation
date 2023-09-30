import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout"
import Home from "../pages/Home";




export const BaseRoute: React.FC = () => {
    const link = {
        label: "",
        path: "",
        src: ""
    }
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Layout link={link} />}>
                    <Route path="/" element={<Home />} />
                </Route>







            </Routes>


        </BrowserRouter>
    );
};