import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Home from "../pages";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </>
    )

);

export default router;
