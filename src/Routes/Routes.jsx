import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import AppDetails from '../pages/AppDetails/AppDetails';
import Installation from '../pages/Installation/Installation';

 export const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
    errorElement: <ErrorPage />,
     children:[
        {
            index:true,
            Component:Home
        },
         {
        path: "apps",
        Component:Apps
      },
      {
        path: "app/:id",
        Component:AppDetails
      },
      {
         path: "installation",
        Component:Installation
      },
     ]


  },
]);