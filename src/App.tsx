import { ChakraProvider, Flex } from "@chakra-ui/react";
import RegisterPage from "./pages/register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import HomePage from "./pages/home/home";
import MainHomePage from "./pages/mainHome/MainHome";
import PrivateRoute from "./pages/routes/ProtectedRoute";

function App() {
  return (
    <ChakraProvider>
      <Flex>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainHomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/home"
              element={
                <PrivateRoute nav="/login">
                  <HomePage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
