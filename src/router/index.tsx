import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { Suspense, lazy } from "react";
import Layout from "../layout/Layout";
import Loading from "../components/ui/Loading";
const Home = lazy(() => import("../pages"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />} errorElement={<NotFound />}>
                <Route index element={
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                } />
                <Route path="about" element={
                    <Suspense fallback={<Loading />}>
                        <About />
                    </Suspense>
                } />
                <Route path="contact" element={
                    <Suspense fallback={<Loading />}>
                        <Contact />
                    </Suspense>
                } />
            </Route>
            <Route path="*" element={<NotFound />} />
        </>
    )
);

export default router;
