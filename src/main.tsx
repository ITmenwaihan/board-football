import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from "./router/routes";
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
    
  </StrictMode>,
)
