import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <HashRouter basename="/typescript-react-hotel-booking-app/">
  <BrowserRouter basename="/typescript-react-hotel-booking-app/">
    <App />
  </BrowserRouter>,
);
