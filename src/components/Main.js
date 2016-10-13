require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';
import CommentBox from './comment/CommentBox';
import Slider from './slider/Slider';

let yeomanImage = require('../images/yeoman.png');


class AppComponent extends React.Component {
  render() {
    let carouselData = [{
      'id': 1,
      'src': require('../images/yeoman.png'),
      'name': 'test',
      'alt': 'img1',
      'url': 'http://www.weibo.com'
    },
      {
        'id': 2, 'src': require('../images/yeoman.png'), 'name': 'test', 'alt': 'img2'
      },
      {
        'id': 3,
        'src': require('../images/yeoman.png'),
        'name': 'test',
        'alt': 'img3'
      }];

    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>

        /* 评论组件*/
        <CommentBox />

        /*轮播组件*/
        <Slider items={carouselData} arrows={true} autoplay={false}/>
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
