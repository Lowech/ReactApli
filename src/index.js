import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contacts from './components/contacts/contacts.js';
import PersonalArea from './components/personalArea/personalArea';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="personalArea" element={<PersonalArea />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
