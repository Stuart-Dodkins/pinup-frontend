import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const HomePage: React.FC = () => {
  const cookie = new Cookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    cookie.remove("TOKEN");

    const token = cookie.get("TOKEN");
    if (token) return;
    navigate("/");
  };

  return (
    <Flex gap="10px">
      You are logged In! Welcome
      <Button onClick={handleLogout}>Logout</Button>
    </Flex>
  );
};

export default HomePage;
