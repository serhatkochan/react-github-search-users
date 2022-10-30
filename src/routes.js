import {AppLayout, App404} from "pages/app";
import Home from "./pages/home";
import Contact from "./pages/contact";

const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ]
  },
  {
    path: '*',
    element: <App404 />
  }
]

const authMap = routes => routes.map(route => {
  if(route?.children) {
    route.children = authMap(route.children)
  }
  return route;
})
export default authMap(routes);
