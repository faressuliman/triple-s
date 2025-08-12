import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { Suspense, lazy } from "react";
import Layout from "../components/Layout";
import Loading from "../components/ui/Loading";


const Home = lazy(() => import("../pages"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
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
            <Route path="*" element={
                <Suspense fallback={<Loading />}>
                    <NotFound />
                </Suspense>
            } />
        </>
    )
);

export default router;
