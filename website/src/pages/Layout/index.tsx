import { Outlet } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Layout = () => {
    return (
        <div>
            <ToastContainer
                autoClose={2000}
                theme="light"
                transition={Slide}
                hideProgressBar={true}
            />
            {/* <Box px="9" py="3">
            <Flex align="center">
                <img src={SeismeHub} width={50} />
                <Text size="5" weight="bold">SeismeHub</Text>
                <Flex grow="1" justify="end" gap="3">
                    <AddConvoy />
                    <AddVillage />
                </Flex>
            </Flex>
        </Box> */}
            
            <Outlet />
        </div>
    );
};

export default Layout;
