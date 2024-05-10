import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MainHomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex gap={"10px"}>
        <Button onClick={() => navigate("/register")}>Register</Button>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </Flex>
    </>
  );
};

export default MainHomePage;
