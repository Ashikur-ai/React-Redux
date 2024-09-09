import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DataFetching from './pages/DataFetching.jsx';
import CreatePost from './pages/CreatePost.jsx';
import UpdatePost from './pages/UpdatePost.jsx';
import DeletePost from './pages/DeletePost.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/data-fetching",
    element: <DataFetching></DataFetching>
  },
  {
    path: "/create-post",
    element: <CreatePost></CreatePost>
  },
  {
    path: "/update-post",
    element: <UpdatePost></UpdatePost>
  },
  {
    path: "/delete-post",
    element: <DeletePost></DeletePost>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
