import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <div>Hello World</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

