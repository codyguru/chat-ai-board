import IndexPage from 'pages/index.tsx';
import MainLayout from 'layouts/MainLayout.tsx';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <IndexPage />,
    },
    {
      path: 'chats/:id',
      element: <IndexPage />,
    },
    {
      path: '*',
      element: <IndexPage />,
    },
  ],
};

export default MainRoutes;
