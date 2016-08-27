

import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/less/bootstrap.less';
import './styles/custom-styles.css';

import Body from './Body';
import Footer from './Footer';

global.React = React;

ReactDom.render(
  <div>

    <Body />
    <Footer />
  </div>
  , document.getElementById('app'));


 require( ['./activeButton'], function( activeButton){

    console.log("test");
});

