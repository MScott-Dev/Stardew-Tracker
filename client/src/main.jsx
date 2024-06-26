import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Signup from './pages/Signup.jsx';
import GetStarted from './pages/GetStarted.jsx';
import Communitycenter from './pages/CommunityCenter.jsx';
import Login from './pages/Login.jsx';
import WrongTurn from './pages/WrongTurn.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/getStarted",
        element: <GetStarted />
      },
      {
        path: "/communityCenter/:userID",
        element: <Communitycenter/>
      },
      {
        path: "/communityCenter/WrongTurn",
        element: <WrongTurn/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)