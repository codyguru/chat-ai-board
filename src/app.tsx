import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ScrollTop from 'components/ScrollTop.tsx';
import Routes from 'routes/index.ts';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </QueryClientProvider>
  );
};

export default App;
