// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import store from './store/store.jsx'
// import { Provider } from 'react-redux'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
 
// )


import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

// import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import store  from "./store/store";

import AuthInitializer from "./components/AuthInitializer";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router.jsx";

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store ={store}>
      <AuthInitializer>
        <RouterProvider router={Router} />
      </AuthInitializer>

    </Provider>
  </QueryClientProvider>,
);
