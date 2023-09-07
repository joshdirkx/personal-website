import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from "./About";
import Background from "./Background";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Links from "./Links";
import Navigation from "./Navigation";
import reportWebVitals from './reportWebVitals';
import './tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background />
    <Navigation />
    <Header />
    <About />
    {/*<Contact />*/}
    {/*<Links />*/}
    {/*<Footer />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
