import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import PlaceOrder from "../pages/PlaceOrder";
import Orders from "../pages/Orders";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        path:'/',
        Component:Home,
      },
      {
        path:'/collection',
        Component:Collection,
      },
      {
        path:'/about',
        Component:About,
      },
      {
        path:'/contact',
        Component: Contact,
      },
      {
        path:'/product/:productId',
       Component:Product,
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:'/login',
        Component:Login,
      },
      {
        path:'/place-order',
        Component:PlaceOrder,
      },
      {
        path:'/orders',
        Component:Orders,
      }
    ]
  },
]);