import React from 'react';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { createRoot } from 'react-dom/client'
import './styles.css'
import Home from './views/Home'

createRoot(document.getElementById('root')).render(
  <DndProvider backend={HTML5Backend}>
    <Home></Home>
  </DndProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

