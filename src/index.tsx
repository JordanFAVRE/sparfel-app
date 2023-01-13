import "./i18n";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <React.Suspense fallback="loading">
            <App />
        </React.Suspense>
    </React.StrictMode>,
);