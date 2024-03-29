import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import Products from './pages/Products/Products';
import Admin from './pages/Admin/Admin';
import ProductsDetail from './pages/ProductDetail/ProductsDetail';
import Cart from './pages/Cart/Cart';
import ProtectedRoute from './components/ProtectedRoute';
import MyPage from './pages/MyPage/MyPage';
import ProductsManagement from './components/ProductsManagement/ProductsManagement';
import AddNewProduct from './components/AddNewProduct/AddNewProduct';
import Order from './pages/Order/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'new',
        element: <Products />,
      },
      {
        path: 'women',
        element: <Products />,
      },
      {
        path: 'men',
        element: <Products />,
      },
      {
        path: 'beauty',
        element: <Products />,
      },
      {
        path: 'life',
        element: <Products />,
      },
      {
        path: 'sale',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <ProductsDetail />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'order',
        element: <Order />,
      },
      {
        path: 'mypage',
        element: (
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin',
        element: (
          <ProtectedRoute requireAdmin>
            <Admin />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'product-management',
            element: <ProductsManagement />,
          },
          {
            path: 'add-product',
            element: <AddNewProduct />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
