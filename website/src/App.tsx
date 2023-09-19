import { QueryClient, QueryClientProvider } from "react-query";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';

import Home from "./pages/Home";
import Layout from "./pages/Layout";

import './index.css';

import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";                

import 'primeicons/primeicons.css';
import { MapProvider } from "./contexts/MapContext";

function App() {
    const queryClient = new QueryClient();

    const routes = createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
        </Route>
    );

    const router = createBrowserRouter(routes);

    return (
        <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
                <MapProvider>
                <RouterProvider router={router} />
                </MapProvider>
            </PrimeReactProvider>
        </QueryClientProvider>
    );
}

export default App;
