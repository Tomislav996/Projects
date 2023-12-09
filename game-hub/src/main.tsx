import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./index.css";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { GamesProvider } from "./context/gamesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <GamesProvider>
        <RouterProvider router={router} />
      </GamesProvider>
    </ChakraProvider>
  </React.StrictMode>
);
