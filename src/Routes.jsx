import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MacBookAirTwo from "pages/MacBookAirTwo";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "macbookairtwo",
      element: <MacBookAirTwo />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
