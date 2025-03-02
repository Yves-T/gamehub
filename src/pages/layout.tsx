import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default layout;
