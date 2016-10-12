require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';
import CommentBox from './comment/CommentBox';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>

        <CommentBox />
      </div>


    );
  }
}

AppComponent.defaultProps = {};

/*class Comment extends React.Component{
 render(){
 return (
 <div className="{this.props.className}">
 <div className="content">
 <li>项目A1: <input type="radio" name="a" value="good" />好1 <input type="radio" name="a" value="bad"/>坏</li>
 </div>
 </div>
 );
 }
 }*/


export default AppComponent;
