
import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Добавляем IBM Plex Sans для основного текста
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap';
document.head.appendChild(fontLink);

createRoot(document.getElementById("root")!).render(<App />);
