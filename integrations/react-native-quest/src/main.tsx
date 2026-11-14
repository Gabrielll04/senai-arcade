// Fontes locais (sem CDN), só o alfabeto latino (cobre o português).
import '@fontsource/pixelify-sans/latin-700.css';
import '@fontsource/nunito/latin-400.css';
import '@fontsource/nunito/latin-700.css';
import '@fontsource/nunito/latin-800.css';
import '@fontsource/jetbrains-mono/latin-400.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';

const root = document.getElementById('root');
if (!root) throw new Error('#root não encontrado');
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
