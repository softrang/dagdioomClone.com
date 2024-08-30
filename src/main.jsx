import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { DetaProvider } from "./Context/ShareDeta.jsx";
import App from './App.jsx'
import './index.css'
import Header from "./Header/Header.jsx";
import Sinin from "./Sinin/Sinin.jsx";
import Sinup from "./Sinup/Sinup.jsx";
import GrehoProduct from "./Product/GrehoProduct.jsx";
import BabyProduct from "./Product/BabyProduct.jsx";
import BoyShoping from "./Product/BoyShoping.jsx";
import BrandProduct from "./Product/BrandProduct.jsx";
import GazetProduct from "./Product/GazetProduct.jsx";
import HelthProduct from "./Product/HelthProduct.jsx";
import WatchProduct from "./Product/WatchProduct.jsx";
import ProductDetails from "./Product/ProductDetails.jsx";
import WinterProduct from "./Product/WinterProduct.jsx";
import SecurityProduct from "./Product/SecurityProduct.jsx";
import CosmititicProduct from "./Product/CosmititicProduct.jsx";
import ElectricProduct from "./Product/ElectricProduct.jsx";

const router = createBrowserRouter([
   
  {
    path: "/",
    element: <App/>,
  },
      {
        path: "/home",
        element: <App />,
       
      },
   
   
      {
        path: "/sinin",
        element: <Sinin/>
       
      },
      {
        path: "/sinup",
        element: <Sinup />,
       
      },
     
      {
        path: "/grehoproduct",
        element: <GrehoProduct/>,
       
      },

      {
        path: "/babyandkids",
        element: <BabyProduct/>,
       
      },

    

      {
        path: "/boyshoping",
        element: <BoyShoping/>,
       
      },
   

      {
        path: "/brandProduct",
        element: <BrandProduct/>,
       
      },
   
      {
        path: "/gezetproduct",
        element: <GazetProduct/>,
       
      },
   


     

      {
        path: "/helthproduct",
        element: <HelthProduct/>,
       
      },

    


      {
        path: "/wacthproduct",
        element: <WatchProduct/>,
       
      },

      {
        path: "/winterproduct",
        element: <WinterProduct/>,
       
      },
      {
        path: "/securityproduct",
        element: <SecurityProduct/>,
       
      },
      {
        path: "/cosmiticproduct",
        element: <CosmititicProduct/>,
       
      },
      {
        path: "/electricproduct",
        element: <ElectricProduct/>,
       
      },



      
      {
        path: "/products/:title",
        element: <ProductDetails/>,
       
      },

     

  {
    path: "/2",
    element: <Header/>,
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <DetaProvider>  
  <RouterProvider router={router} />
  </DetaProvider>
  </StrictMode>,
)
