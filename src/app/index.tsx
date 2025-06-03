import { createTheme, MantineProvider } from '@mantine/core';
import { AppRouter } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { queryConfig } from '../lib/react-query';

const theme = createTheme({});
//TODO: можно вынести все провайдеры в отдельный файл
export const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </MantineProvider>
  );
};
