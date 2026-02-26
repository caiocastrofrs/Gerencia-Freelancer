import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tokens/index.css';
import { RelayEnvironmentProvider } from "react-relay";
import environment from './relay/environment.ts';
import { RouterProvider } from "react-router/dom";
import router from './routes/index.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading...">
        <RouterProvider router={router} />
      </Suspense>
    </RelayEnvironmentProvider>
  </StrictMode >,
)
