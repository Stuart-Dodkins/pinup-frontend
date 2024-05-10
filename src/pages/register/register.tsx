import { Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [registered, setRegistered] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (registered) {
      navigate("/");

      return;
    }
  }, [registered]);

  const handleFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5050/register", payload)
      .then((res) => {
        if (!res) return;

        console.log("res", res);

        setRegistered(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Flex
        height={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        flexDirection={"column"}
      >
        <Flex direction={"column"} gap={"20px"}>
          <Text fontWeight={"bold"} width={"100%"}>
            Register
          </Text>
          <Flex flexDirection={"column"} gap={"5px"}>
            <Text fontWeight={"bold"} width={"100%"}>
              Email
            </Text>
            <Input onChange={(e) => setEmail(e.currentTarget.value)} />
          </Flex>
          <Flex flexDirection={"column"} gap={"5px"}>
            <Text fontWeight={"bold"} width={"100%"}>
              Password
            </Text>
            <Input
              type="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </Flex>

          <Button
            disabled={!email || !password}
            onClick={(e) => handleFormSubmit(e)}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default RegisterPage;
