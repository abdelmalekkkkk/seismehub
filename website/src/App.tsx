import { QueryClient, QueryClientProvider } from "react-query";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";


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
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
