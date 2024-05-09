import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Business } from "./models/business";
import { ChakraProvider, Flex } from "@chakra-ui/react";

function App() {
  const [businesses, setBusinesses] = useState<Business[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pinup-backend.onrender.com/business"
        );
        setBusinesses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ChakraProvider>
      <Flex
        flexDirection={"column"}
        gap={"20px"}
        maxWidth={"500px"}
        padding={"50px"}
      >
        {businesses &&
          businesses.map((business) => (
            <Flex
              flexDirection={"column"}
              border={"1px solid black"}
              borderRadius={"10px"}
              padding={"10px"}
              justify={"center"}
            >
              <span key={business.businessId}>{business.name}</span>
              <span>{business.description}</span>
            </Flex>
          ))}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
