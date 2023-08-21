import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a new instance of QueryClient()
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        {/* set the theme mode using ColorModeScript */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
        <ReactQueryDevtools/>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
