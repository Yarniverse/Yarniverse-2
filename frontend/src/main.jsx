import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import CurrentProjectContextProvider from './contexts/CurrentProjectContextProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <CurrentProjectContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
    // </CurrentProjectContextProvider>,
);
