import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { QueryClient, QueryClientProvider } from "react-query";
//Allow us to see what is happening in realtime on our application 
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <App />  
    </QueryClientProvider>  
  </React.StrictMode>
);
