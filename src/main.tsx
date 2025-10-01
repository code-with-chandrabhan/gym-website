import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId="649587736114-s68615kkljqfhkdhras8c4hqm7kv6j3q.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
