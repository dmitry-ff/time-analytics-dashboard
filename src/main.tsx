import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './app';
import './index.css';
import '@mantine/core/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
