import IndexPage from 'pages/index.tsx';

const MainRoutes = {
  path: '/',
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
