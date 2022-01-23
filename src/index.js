import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme';
import {
  HashRouter,
  //BrowserRouter,
} from "react-router-dom";

import Home from './coomponents/Home';
import About from './coomponents/About'

{/*
import { Container, Text } from '@chakra-ui/react';
import {
  Switch,
  Route
} from "react-router-dom";
import Contact from './contact/Contact';
import Footer from './base/Footer';
import Page404 from './base/Page404';
import Swiper_Work from './works/Swiper_Work';
import NavBar from './base/header/NavBar';
import Skill_level from './about/Skill_level';
import Detail_description_1 from './works/detail_descriptions/Detail_description_1';
import Detail_description_2 from './works/detail_descriptions/Detail_description_2';
import Profile from './about/Profile';
*/}


ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <ChakraProvider theme={theme} resetCSS={false}>

          {/*<Route component={NotFound} status={404} />*/}
          <App />

      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
